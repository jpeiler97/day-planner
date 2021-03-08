var timeText = $('#currentDay');
var hourBlock = $('.hour');
$('#currentDay').text(moment().format('MMMM Do, YYYY'));
var timeblockCount = $('.blockArea').children().length;
var currentHour = moment();

for (i = 0; i < timeblockCount; i++) {
	var blockHour = moment($('.blockArea').children().eq(i).children('.hour').text(), 'HH A');
	console.log(' ');
	console.log('Block hour:' + blockHour);
	console.log('Current hour:' + currentHour);
	if (blockHour.isSame(currentHour, 'hour') === true) {
		$('.blockArea')
			.children()
			.eq(i)
			.children('.hour')
			.siblings('.past')
			.addClass('present')
			.toggleClass('.present');
	} else if (blockHour.isBefore(currentHour, 'hour') === true) {
		$('.blockArea').children().eq(i).children('.hour').siblings('.past').addClass('past').toggleClass('.past');
	} else if (blockHour.isAfter(currentHour, 'hour') === true) {
		$('.blockArea').children().eq(i).children('.hour').siblings('.past').addClass('future').toggleClass('.future');
	}
}
