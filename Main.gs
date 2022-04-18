/**
 * Main function used to insert the target time and submitting google form at target time
 */
function main() {
  var targetTime;
  if (dtInNumber == 1) {
    targetTime = convertNumberToDateAndTime(dateNum)
  } else {
    targetTime = new Date(dateStr)
  }
  submitEntryToGoogleForm(targetTime)
}