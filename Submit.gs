/**
 * Used to submit the google form at a given time
 */
function submitEntryToGoogleForm(dtarget) {
  let dtargetTime = dtarget.getTime();
  let timeElapsed = updateTime;
  let submitted = false;
  while (true) {
    let start = Date.now();
    if (timeElapsed >= updateTime) {
      Logger.log("Current time - " + printDateWithoutTZ(convertUTCtoTZ(new Date(), utcOffset)) + " Submission time - " + printDateWithoutTZ(dtarget))
      timeElapsed = 0
    }
    let dnow = convertUTCtoTZ(new Date(), utcOffset)
    if (dnow.getTime() === dtargetTime) {
      try {
        let response = UrlFetchApp.fetch(preFilledURL);
        if (response.getResponseCode() == 200) {
          Logger.log("Google form submitted at " + printDateWithoutTZ(convertUTCtoTZ(new Date(), utcOffset)));
        }
      submitted = true;
      } catch (error) {
        throw new Error("You may not have provided the correct prefilled URL. Make sure the entry IDs are correct and all required parts have a response");
      }
      break;
    }
    if (dtarget < dnow) {
      throw new Error("The target time has already passed. Submit an appropriate target time :)");
    }
    let end = Date.now();
    timeElapsed = timeElapsed + end - start
  }
  if (!submitted) {
    throw new Error("Total time trying to submit has exceeded the max. You can rerun when you're closer to the target time or edit the max (mazTotalLoopTime) in the variables file");
  }
}