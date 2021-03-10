$('#currentDay').text(moment().format('MMMM Do, YYYY'));
var timeblockCount = $('.blockArea').children().length;
var currentHour = moment();

//Iterates over number of time block elements
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
		$('.blockArea').children().eq(i).children('.hour').siblings('.past').addClass('future').toggleClass('.future');
	}
}
