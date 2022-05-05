// Do not edit these unless you have a good reason to
const pi = 3141592653589
const e = 2718281828459
const ascNumbers = 1234567891011

// Edit these variables
const preFilledURL = "https://docs.google.com/forms/d/e/1FAIpQLSejzmFmE8b2CidvukmZ6Y4ZjMxnkesZlZ6LX6rKr1XsJGRHIg/formResponse?usp=pp_url&entry.768086295=Hey+guy+Im+bing+chilling";
const timeZone = "Europe/Amsterdam"
const utcOffset = new TimeZone(JSON.parse(UrlFetchApp.fetch("http://worldtimeapi.org/api/timezone/" + timeZone).getContentText()).utc_offset);
const updateTime = 30000 // in milliseconds
const dtInNumber = 0 // 1 if you want to submit a number as time and 0 if you want to submit in ISO 8601 date and time format 
const dateNum = 112233445566
const dateStr = "2022-05-05T16:02:00.368"

/**
 * HOW TO ISO 8601 date and time format
 * YYYY-MM-DD + T + HH:MM:SS.___
 * The plus indicates concatenation
 * _ - milliseconds
 * 
 * Here's an example of date and time written in ISO 8601 format 
 * 2022-04-18T22:06:59.368
 */