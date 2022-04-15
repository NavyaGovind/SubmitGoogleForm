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
 * 2 - month
 * 2 - date
 * 2 - hours
 * 2 - minutes
 * 2 - seconds
 * 3 - miliseconds
 * However, not all 13 digits may be used at a time
 */
function convertNumberToDateAndTime(num) {
  var numArray = String(num).split("").map((num)=>{
  return Number(num)
  })

  // ensure there are at least 13 numbers by appending zeroes
  while (numArray.length < 13) {
    numArray.push(0);
    Logger.log(numArray.length.toString())
  }

  let idx = 0;
  // get month
  if (numArray[idx] <= 1 && numArray[idx+1] <= 2) {
    month = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    month = numArray[idx]
    idx = idx + 1;
  } 
  Logger.log(month);
  
  // get date
  maxDays = getDaysInMonth(month, 2022)
  maxDay2 = maxDays%10;
  maxDay1 = parseInt(maxDays/10);
  if (numArray[idx] <= maxDay1 && numArray[idx+1] <= maxDay2) {
    date = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    date = numArray[idx]
    idx = idx + 1;
  }
  Logger.log(date);
  
  // get hours
  if (numArray[idx] <= 2 && numArray[idx+1] <= 23) {
    hours = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    hours = numArray[idx]
    idx = idx + 1;
  }
  Logger.log(hours);

  // get minutes
  if (numArray[idx] <= 5 && numArray[idx+1] <= 9) {
    minutes = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    minutes = numArray[idx]
    idx = idx + 1;
  }
  Logger.log(minutes);

  // get seconds
  if (numArray[idx] <= 5 && numArray[idx+1] <= 9) {
    seconds = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    seconds = numArray[idx]
    idx = idx + 1;
  }
  Logger.log(seconds);

  // get milliseconds
  milliseconds = numArray[idx]*100+numArray[idx+1]*10+numArray[idx+2]
  Logger.log(milliseconds);

  
}

/**
 * Get the numbers of days in a month based on the given month and year
 */
function getDaysInMonth(month, year) {
  const monthDays = [-1,31,28,31,30,31,30,31,31,30,31,30,31]
  // leap year -> Month of February has an extra day
  if (year%4 == 0 && month == 2) {
    return 29;
  }
  return monthDays[month];
}

/**
 * Print the current date and time
 */
function printCurrentDateAndTime() {
  let d = new Date();
  let dateLocaleStr  = d.toLocaleString('nl-NL', { timeZone: 'CET' });
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
  Logger.log(dateLocaleStr);
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