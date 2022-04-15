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
  
  // get hours
  if (numArray[idx] <= 2 && numArray[idx+1] <= 23) {
    hours = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    hours = numArray[idx]
    idx = idx + 1;
  }

  // get minutes
  if (numArray[idx] <= 5 && numArray[idx+1] <= 9) {
    minutes = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    minutes = numArray[idx]
    idx = idx + 1;
  }

  // get seconds
  if (numArray[idx] <= 5 && numArray[idx+1] <= 9) {
    seconds = numArray[idx]*10+numArray[idx+1]
    idx = idx + 2;
  } else {
    seconds = numArray[idx]
    idx = idx + 1;
  }

  // get milliseconds
  milliseconds = numArray[idx]*100+numArray[idx+1]*10+numArray[idx+2]
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
  if (hour < 10) {
    hour = "0" + hour.toString();
  }
  hour = hour.toString();
  let minute = d.getUTCMinutes();
  if (minute < 10) {
    minute = "0" + minute.toString();
  }
  minute = minute.toString();
  let second = d.getUTCSeconds();
  if (second < 10) {
    second = "0" + second.toString();
  }
  second = second.toString();
  let millisecond = d.getUTCMilliseconds().toString();
  millisecond = "12"
  Logger.log(millisecond.length)
  while (millisecond.length < 3) {
    millisecond = "0" + millisecond
  }
  Logger.log(day + " " + date + " " + month + " " + year +  " "  + hour +  ":" + minute + ":" +  second + ":" +  millisecond);
  //Logger.log(dateLocaleStr);
}

/**
 * Takes the month in numbers and returns the month as a string
 * Note: The months start at 0
 */
function getMonthName(monthNumber) {
  const monthNum = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  return monthNum[monthNumber];
}

/**
 * Takes the day in numbers and returns the day as a string
 * Note: The days start at 0
 */
function getDayName(dayNumber) {
  const dayNum = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  return dayNum[dayNumber];
}