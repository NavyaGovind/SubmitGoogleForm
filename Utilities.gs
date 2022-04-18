/**
 * Convert the given UTC date time to the given timezone's time
 */
function convertUTCtoTZ(d, tz) {
  if (tz.sym == "-") {
    tz.hourOffset = -1 * tz.hourOffset;
    tz.minuteOffset = -1 * tz.minuteOffset;
  }
  newHours = d.getUTCHours() + tz.hourOffset
  newMinutes = d.getUTCMinutes() + tz.minuteOffset
  d.setHours(newHours)
  d.setMinutes(newMinutes)

  year = d.getUTCFullYear().toString()
  // javascript date object to ISO standard conversion
  d.setMonth(d.getMonth()+1)
  month = padWithZeroes(2, d.getMonth().toString())
  date = padWithZeroes(2, d.getDate().toString());
  hour = padWithZeroes(2, d.getHours().toString())
  minute = padWithZeroes(2, d.getMinutes().toString())
  second = padWithZeroes(2, d.getUTCSeconds().toString())
  millisecond = padWithZeroes(3, d.getUTCMilliseconds().toString())
  
  let dateStr = year + "-" + month + "-" + date + "T" + hour + ":" + minute + ":" + second + "." + millisecond;
  let convDT = new Date(dateStr);
  return convDT;
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

  let idx=0;
  let d = new Date();

  d.setFullYear(d.getUTCFullYear())

  result = checkMaxInArr(idx, numArray, 12)
  if (result[1]-1 <= -1) {
    throw new Error("Month value can't be 0. Enter a valid date time number!");
  } else {
    d.setMonth(result[1]-1);
  }
  
  maxDays = getDaysInMonth(result[1], d.getUTCFullYear())
  result = checkMaxInArr(result[0], numArray, maxDays)
  if (result[1] <= 0) {
    throw new Error("Date value can't be 0. Enter a valid date time number!");
  } else {
    d.setDate(result[1])
  }

  result = checkMaxInArr(result[0], numArray, 23)
  d.setHours(result[1])

  result = checkMaxInArr(result[0], numArray, 59)
  d.setMinutes(result[1])

  result = checkMaxInArr(result[0], numArray, 59)
  d.setSeconds(result[1])

  idx = result[0]
  d.setMilliseconds(numArray[idx]*100+numArray[idx+1]*10+numArray[idx+2])
  return d;
}

/**
 * Checks if two consecutive indices in the given array are less than the max
 */
function checkMaxInArr(idx, arr, max) {
  if (arr[idx]*10+arr[idx+1] <= max) {
    return [idx + 2, arr[idx]*10+arr[idx+1]]
  } else {
    return [idx + 1, arr[idx]]
  }
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

/**
 * Append the starting of the str with zeroes until str is len long
 */
function padWithZeroes(len, str) {
  while (str.length < len) {
    str = "0" + str
  }
  return str
}

/**
 * Print js date without timezone
 */
function printDateWithoutTZ(date) {
  return date.toString().slice(0,25)
}

/**
 * Splits a string into array cells
 */
function strToArr(str) {
  var arr = String(str).split("").map((str)=>{
  return String(str)
  })
  return arr;
}