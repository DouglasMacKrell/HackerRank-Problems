// Time Conversion
// https://www.hackerrank.com/challenges/time-conversion/problem

// Given a time in 12-hour AM/PM format,
// convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// a = '12:01:00PM'

// Return '12:01:00'.

// s = '12:01:00AM'

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below.
// It should return a new string representing the input time
// in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in 12 hour format

// Returns

// string: the time in 24 hour format

// Input Format

// A single string s that represents a time in 12-hour
// clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45













function timeConversion(s) {
  let dayNight = s[s.length - 2] + s[s.length - 1];
  let sliceTime = s.slice(0, s.length - 2);
  let timeSplit = sliceTime.split(":");
  let hourUpdate = 0;
  if (dayNight === "PM" && parseInt(timeSplit[0]) < 12) {
    hourUpdate = parseInt(timeSplit[0]) + 12;
    timeSplit.shift();
    timeSplit.unshift(hourUpdate.toString());
    return timeSplit.join(":");
  } else if (dayNight === "AM" && parseInt(timeSplit[0]) === 12) {
    hourUpdate = "00";
    timeSplit.shift();
    timeSplit.unshift(hourUpdate);
    return timeSplit.join(":");
  } else {
    return timeSplit.join(":");
  }
}

console.log(timeConversion('09:05:27PM'))