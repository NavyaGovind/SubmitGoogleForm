/**
 * Used to submit the google form at a given time
 * Note: From running it on my computer, the loop takes about 2 milliseconds to execute
 */
function submitEntryToGoogleForm(matchMonth, matchDate, matchHour, matchMinute) {
  while (true) {
    let d = getCurrentUTCDateAndTime();
    Logger.log("logging time " + d + " //");
    printCurrentDateAndTime();
    month = d.getMonth()
    date = d.getDate()
    hour = d.getHours()
    minute = d.getMinutes()
//    Logger.log(month.toString() + matchMonth.toString());
//    Logger.log(date.toString() + matchDate.toString());
//    Logger.log(hour.toString() + matchHour.toString());
//    Logger.log(minute.toString() + matchMinute.toString());
    if (month == matchMonth & date == matchDate & hour == matchHour & minute == matchMinute){
      break;
    }
  }
  let response = UrlFetchApp.fetch(url);
  Logger.log("form submitted at")
  printCurrentDateAndTime();
}