/**
 * Used to submit the google form at a given time
 */
function submitEntryToGoogleForm(dtarget) {
  let dtargetTime = dtarget.getTime();
  let totalTimeElapsed = 0;
  let timeElapsed = maxLoopTime;
  while (totalTimeElapsed < maxTotalLoopTime) {
    let start = Date.now();
    if (timeElapsed >= maxLoopTime) {
      Logger.log("Current time - " + printDateWithoutTZ(convertUTCtoTZ(new Date(), utcOffset)) + " Submission time - " + printDateWithoutTZ(dtarget))
      timeElapsed = 0
    }
    let dnow = convertUTCtoTZ(new Date(), utcOffset)
    if (dnow.getTime() === dtargetTime) {
      let response = UrlFetchApp.fetch(preFilledURL);
      if (response.getResponseCode() == 200) {
        Logger.log("Google form submitted at" + printDateWithoutTZ(convertUTCtoTZ(new Date(), utcOffset)));
      }
      break;
    }
    if (dtarget < dnow) {
      throw new Error("The target time has already passed. Submit an appropriate target time :)");
    }
    let end = Date.now();
    timeElapsed = timeElapsed + end - start
    totalTimeElapsed = totalTimeElapsed + end - start
  }
  throw new Error("Total time trying to submit has exceeded the max. You can rerun when you're closer to the target time or edit the max (mazTotalLoopTime) in the variables file");
}