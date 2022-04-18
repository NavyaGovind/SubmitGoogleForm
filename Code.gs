/**
 * Used to submit the google form at a given time
 */
function submitEntryToGoogleForm(matchMonth, matchDate, matchHour, matchMinute) {
  let timeElapsed = 0;
  while (true) {
    let start = Date.now();
    let d = getCurrentUTCDateAndTime();
    if (timeElapsed >= 60000) {
      Logger.log("The current time is - ")
      printCurrentDateAndTime();
      Logger.log("The form will be submitted at - ")
      Logger.log(matchDate + " " + matchMonth + " 2022 "  + matchHour +  ":" + matchMinute + ":00:000");
      timeElapsedInLoop = 0
    }
    month = d.getMonth()
    date = d.getDate()
    hour = d.getHours()
    minute = d.getMinutes()
    if (month == matchMonth & date == matchDate & hour == matchHour & minute == matchMinute){
      break;
    }
    let end = Date.now();
    timeElapsed = timeElapsed + end - start
  }
  let response = UrlFetchApp.fetch(url);
  Logger.log("form submitted at")
  printCurrentDateAndTime();
}