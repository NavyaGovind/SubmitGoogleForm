/**
 * A makeshift class used to store the timezone with respect to UTC
 */
var TimeZone = function(utcOffset){

  arr = strToArr(utcOffset)
  this.sym = arr[0]  
  this.hourOffset = Number(arr[1])*10+Number(arr[2])
  this.minuteOffset = Number(arr[4])*10+Number(arr[5]);

  /**
   * Prints the timezone in the form of UTC +/- hourOffset:minuteOffset
   */
  this.printTZ = function(){
    Logger.log("UTC " + this.sym + " " + padWithZeroes(2,this.hourOffset.toString()) + ":" + padWithZeroes(2,this.minuteOffset.toString()));
  }
};