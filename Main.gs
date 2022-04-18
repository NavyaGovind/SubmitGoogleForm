function main() {
  var response = UrlFetchApp.fetch("http://worldtimeapi.org/api/timezone/" + timeZone);
  var content = JSON.parse(response.getContentText());
  let utcOffset = new TimeZone(content.utc_offset)
 // utcOffset.printTZ()
  let timeInTZ = convertUTCtoTZ(new Date(), utcOffset)
  Logger.log(convertNumberToDateAndTime(pi));
}