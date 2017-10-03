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
  console.log('the variable is set as ' + (typeof(testString)) + ' ' +testString);
  let newInt = Number(testString);
  console.log('now it is the ' +(typeof(newInt)) + ' ' +newInt);
}
strConvert();
// takes integer and converts to a string
let intConvert = function() {
  let testInt = 9;
  console.log('the variable is set as the ' +(typeof(testInt)) + ' ' +testInt);
  let newStr =testInt.toString();
  console.log('now it is the ' +(typeof(newStr)) + ' ' +newStr);
}
intConvert();
// tests the datatype of each variable
let dataType = function() {
  let testBoolean = true;
  console.log('true is of the datatype: ' +typeof(testBoolean));
  let testNull = null;
  console.log('null is of the datatype: ' +typeof(testNull));
  let testUnd;
  console.log('no assigned value produces the datatype: ' +typeof(testUnd));
  let testNum = 5;
  console.log('5 is of the datatype: ' +typeof(testNum));
  let testNaN = Number.NaN;
  console.log('Number.Nan produces the datatype: ' +typeof(testNaN));
  let testStr = 'word';
  console.log('"word" is of the datatype: ' +typeof(testStr));
}
dataType();
// adds 2 variables together
let addNum = function() {
  let num1 = 3;
  let num2 = 4;
  console.log('when num1=3 and num2=4, num1+num2 = ' +(num1+num2));
}
addNum();
// function that runs only when 2 conditions are true
let twoTrue = function(){
  let par1 = 5;
  let par2 = 8;
  if (par1>4 && par2<10) {
    console.log('this message will appear if both conditions are true');
  } else {
    console.log('this message will appear if any of the conditons are false');
  }
}
twoTrue();
// function that runs when 1 of 2 conditions are true
let oneOfTwo = function() {
  let par3 = 10;
  let par4 = 3;
  if (par3>11 && par4<5) {
    console.log('this message will appear if both conditions are true');
  } else if (par3>11 || par4<5) {
    console.log('this message will appear if only one condition is true');
  } else {
    console.log('this message will appear if neither conditon is true');
  }
}
oneOfTwo();
// function that runs when neither conditions are true
let notTrue = function(){
  let par5 = 9;
  let par6 = 5;
  if (par5 === 10) {
    console.log('this message will appear if first condition is true');
  } else if (par6!== 5) {
    console.log('this message will appear if second condition is true');
  } else {
    console.log('this message will appear if neither conditon is true');
  }
}
notTrue();
