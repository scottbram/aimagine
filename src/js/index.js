/**
 * TODO:
 * - Get holidays from API
 * - From holidays response, randomly select a holiday
 * - Send holiday name as prompt (incl. holiday name as text *in* image)
 * - Return resulting image URL
 */


/**
 * Get holidays from API
 * 
 * https://docs.abstractapi.com/holidays
 * https://app.abstractapi.com/api/holidays/tester
 * 
 */



/**
 * Send holiday name as prompt (incl. holiday name as text *in* image)
 * 
 * https://platform.openai.com/docs/guides/images/introduction
 */
const imgUrl = null;

// document.querySelector('#HolidayImg').src = imgUrl;

async function logHolidays() {
	const response = await fetch('/api/holiday-img');
	const holidays = await response;
	console.log(holidays);
}

logHolidays();
