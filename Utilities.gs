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

  result = accessArr(idx, numArray, 1, 2)
  d.setMonth(result[1]-1);
  Logger.log(result)
  
  maxDays = getDaysInMonth(result[1], d.getUTCFullYear())
  Logger.log(maxDays)
  result = accessArr(result[0], numArray, parseInt(maxDays/10), maxDays%10)
  d.setDate(result[1])
  Logger.log(result)
  
  
  result = accessArr(result[0], numArray, 2, 3)
  d.setHours(result[1])
  Logger.log(result)
  

  result = accessArr(result[0], numArray, 5, 9)
  d.setMinutes(result[1])

Logger.log(result)
  
  result = accessArr(result[0], numArray, 5, 9)
  d.setSeconds(result[1])

Logger.log(result)
  
  idx = result[0]
  d.setMilliseconds(numArray[idx]*100+numArray[idx+1]*10+numArray[idx+2])


  return d;
}

function accessArr(idx, arr, max1, max2) {
  if (arr[idx] <= max1 && arr[idx+1] <= max2) {
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
 * Splits a string into array cells
 */
function strToArr(str) {
  var arr = String(str).split("").map((str)=>{
  return String(str)
  })
  return arr;
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