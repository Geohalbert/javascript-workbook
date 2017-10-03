'use strict';
// logs the current date and time
let displayDate = function () {
  let date = new Date();
  console.log(date);
}
displayDate();

// takes string and converts it to integer
let strConvert = function() {
  let testString = '10';
  console.log('string is ' +testString);
  let newInt = Number(testString);
  console.log('now it is the number ' +newInt);
  console.log(typeof(newInt));
}
strConvert();
// takes integer and converts to a string
let intConvert = function() {
  let testInt = 9;
  console.log('number is ' +testInt);
  let newStr =testInt.toString();
  console.log('now it is the string ' +newStr);
  console.log(typeof(newStr));
}
intConvert();
