function getCurrentUTCDateAndTime() {
  let d = new Date();
  return UTCtoCET(d);
}

function UTCtoCET(utc) {
  utchour = utc.getUTCHours();
  cethour = utchour + 2;
  utc.setHours(cethour);
  return utc
}

/**
 * Used for converting a given number to a date+time
 * Max number that can be entered is 13 digits long. Breakdown of max per params here:
 * 2 - date
 * 2 - month
 * 2 - hours
 * 2 - minutes
 * 2 - seconds
 * 3 - miliseconds
 * However, not all 13 digits may be used at a time
 */
function convertNumberToDateAndTime() {

}

/**
 * Print the current date and time
 */
function printCurrentDateAndTime() {
  let d = new Date();
  let year = d.getFullYear().toString();
  let month = getMonthName(d.getUTCMonth());
  let date = d.getUTCDate().toString();
  let day = getDayName(d.getDay());
  // UTC to local time
  let hour = d.getUTCHours() + 2;
  hour = hour.toString();
  let minute = d.getUTCMinutes().toString();
  let second = d.getUTCSeconds().toString();
  let millisecond = d.getUTCMilliseconds().toString();
  Logger.log(day + " " + date + " " + month + " " + year +  " "  + hour +  ":" + minute + ":" +  second + ":" +  millisecond);
}

/**
 * Takes the month in numbers and returns the month as a string
 * Note: The months start at 0
 */
function getMonthName(monthNumber) {
  switch(monthNumber) {
  case 0:
    return "January"
  case 1:
    return "February"
  case 2:
    return "March"
  case 3:
    return "April"
  case 4:
    return "May"
  case 5:
    return "June"
  case 6:
    return "July"     
  case 7:
    return "August"
  case 8:
    return "September"
  case 9:
    return "October"
  case 10:
    return "November"
  case 11:
    return "December" 
  default:
    return "Something went wrong when assigning the month"
  } 
}

/**
 * Takes the day in numbers and returns the day as a string
 * Note: The days start at 0
 */
function getDayName(dayNumber) {
  switch(dayNumber) {
  case 0:
    return "Sunday"
  case 1:
    return "Monday"
  case 2:
    return "Tuesday"
  case 3:
    return "Wednesday"
  case 4:
    return "Thursday"
  case 5:
    return "Friday"
  case 6:
    return "Saturday"
  default:
    return "Something went wrong when assigning the day"
  } 
}