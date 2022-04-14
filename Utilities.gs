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

function isDaylightSavings() {

}

function convertNumberToDateAndTime() {

}

function printCurrentDateAndTime() {
    let month = d.getUTCMonth() + 1
  monthStr = getMonth(month)
  let date = d.getUTCDate().toString()
  // UTC to local time
  let hour = d.getUTCHours() + 2
  hour = hour.toString()
  let minute = d.getUTCMinutes().toString()
  let second = d.getUTCSeconds().toString()
  let millisecond = d.getUTCMilliseconds().toString()
}

function getMonth(monthNumber) {
  switch(monthNumber) {
  case 1:
    return "January"
  case 2:
    return "February"
  case 3:
    return "March"
  case 4:
    return "April"
  case 5:
    return "May"
  case 6:
    return "June"
  case 7:
    return "July"     
  case 8:
    return "August"
  case 9:
    return "September"
  case 10:
    return "October"
  case 11:
    return "November"
  case 12:
    return "December" 
  default:
    return "Something went wrong when assigning the month"
  } 
}