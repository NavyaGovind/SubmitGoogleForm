var TimeZone = function(utcOffset){

  arr = strToArr(utcOffset)
  this.sym = arr[0]  
  this.hourOffset = Number(arr[1])*10+Number(arr[2])
  this.minuteOffset = Number(arr[4])*10+Number(arr[5]);

  this.printTZ = function(){
    Logger.log("UTC " + this.sym + " " + padWithZeroes(2,this.hourOffset.toString()) + ":" + padWithZeroes(2,this.minuteOffset.toString()));
  }
};