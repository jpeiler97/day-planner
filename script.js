var timeText = $('#currentDay');
var hourBlock = $('.hour');
timeText.textContent = moment().format('MMMM Do, YYYY');
var timeblockCount = $('.blockArea').children().length;

for (i = 0; i < timeblockCount; i++) {
	if ($('.blockArea').children().eq(i).children('.hour').text().substring(0, 2) === moment().format('HH')) {
		$('.blockArea')
			.children()
			.eq(i)
			.children('.hour')
			.siblings('.past')
			.addClass('present')
			.toggleClass('.present');
	} else if ($('.blockArea').children().eq(i).children('.hour').text().substring(0, 2) > moment().format('HH')) {
		$('.blockArea').children().eq(i).children('.hour').siblings('.past').addClass('future').toggleClass('.future');
	}
}
