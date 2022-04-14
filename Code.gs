let url = "https://docs.google.com/forms/d/e/1FAIpQLSejzmFmE8b2CidvukmZ6Y4ZjMxnkesZlZ6LX6rKr1XsJGRHIg/formResponse?usp=pp_url&entry.768086295=Hey+guy+Im+bing+chilling";

function submitEntryToGoogleForm(matchMonth, matchDate, matchHour, matchMinute) {
// responses submitted every 2 milliseconds
  while (true){
    let d = getCurrentDateAndTime();
    month = d.getUTCMonth() + 1
    date = d.getUTCDate().toString()
    // UTC to local time
    hour = d.getUTCHours() + 2
    hour = hour.toString()
    minute = d.getUTCMinutes().toString()
    if (month == matchMonth & date == matchDate & hour == matchHour & minute == matchMinute){
      break;
    }
  }
  let response = UrlFetchApp.fetch(url);
  Logger.log("form submitted at" + getCurrentDateAndTime())
}