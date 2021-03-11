//Displays current day at top of page
$('#currentDay').text(moment().format('MMMM Do, YYYY'));
//Gets number of time blocks
var timeblockCount = $('.blockArea').children().length;
//Variable for current time
var currentHour = moment();

//Object representing each hour (9-5) as a key, used later to store text into local storage
var savedText = {
	nine: '',
	ten: '',
	eleven: '',
	twelve: '',
	one: '',
	two: '',
	three: '',
	four: '',
	five: ''
};
var blockForm = $('.description');
var saveButton = $('.saveBtn');

//Iterates over number of time block elements
function init() {
	for (i = 0; i < timeblockCount; i++) {
		//Stores time string for specific time block into format that can be compared using moment.js (HH A)
		var blockHour = moment($('.blockArea').children().eq(i).children('.hour').text(), 'HH A');

		//Changes class of time block based on if time block's hour matches, is before, or is after currentHour
		if (blockHour.isSame(currentHour, 'hour') === true) {
			//Sets class to present if blockHour is equal to currentHour
			$('.blockArea')
				.children()
				.eq(i)
				.children('.hour')
				.siblings('.past')
				.addClass('present')
				.toggleClass('.present');
		} else if (blockHour.isBefore(currentHour, 'hour') === true) {
			//Sets class to past if blockHour is before currentHour
			$('.blockArea').children().eq(i).children('.hour').siblings('.past').addClass('past').toggleClass('.past');
		} else if (blockHour.isAfter(currentHour, 'hour') === true) {
			//Sets class to future if blockHour is before currentHour
			$('.blockArea')
				.children()
				.eq(i)
				.children('.hour')
				.siblings('.past')
				.addClass('future')
				.toggleClass('.future');
		}
	}
	//Adds event listener to each save button, which stores the text in a given time block in an object in local storage
	saveButton.on('click', function() {
		//Iterates through each time block
		for (i = 0; i < Object.keys(savedText).length; i++) {
			//Saves current key in objects array ('nine', 'ten', etc.) as variable
			var currentKey = Object.keys(savedText)[i];

			//If the saved button's class matches the current key, save the text to local storage with that current key as its name
			if ($(this).siblings('textarea').hasClass(currentKey)) {
				localStorage.setItem(`savedText ${currentKey}`, $(this).siblings('textarea').val());
			}
		}
	});
}

//Gets saved text from local storage and displays on corresponding textareas
function getText() {
	//Iterates through each time block
	for (i = 0; i < Object.keys(savedText).length; i++) {
		//Saves current key in objects array ('nine', 'ten', etc.) as variable
		var currentKey = Object.keys(savedText)[i];
		//Defines new variable currentBlock as the element with the class matching the current key
		var currentBlock = $(`.${currentKey}`);

		//Sets text to be displayed as the time block's corresponding string gotten from local storage
		var storedText = localStorage.getItem(`savedText ${currentKey}`);
		//Displays storedText in the current time block
		currentBlock.val(storedText);
	}
}

//Calling functions
init();
getText();
