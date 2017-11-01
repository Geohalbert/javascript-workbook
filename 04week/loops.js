'use strict';

var cars = ['Ford','Dodge','Chevy','Mazda'];
var moreCars = ['Toyota','Nissian','Lexus','Honda'];
let totalCars = cars.concat(moreCars);
var stringOfCars = totalCars.join();
totalCars = stringOfCars.split(",");
var carsInReverse = totalCars.reverse();
carsInReverse = carsInReverse.sort();
// alert(carsInReverse.indexOf('Chevy'));
var removedCars = carsInReverse.slice(2,4);
carsInReverse.splice(1,2);
carsInReverse.push("Dodge", "Ford");
carsInReverse.pop();
carsInReverse.shift();
carsInReverse.unshift("Buick");
var numbers = [23,45,0,2];
numbers.forEach(function (value,index, numbers){
  numbers[index] = value +2;
});
console.log('carsInReverse: '+carsInReverse);
for (var i=0; i<carsInReverse.length; i++) {
  let car = carsInReverse[i];
  console.log(car);
}
let persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
var text = "";
var x;
}
for (x in persons) {
  console.log(x);
}
let number = 0;
while (number<1000) {
  number++;
  console.log(number);
}
number = 0;
do {
  number++;
  console.log(number);
} while (number<1000)
console.log('for loops are better when the number of iterations are known')
console.log('for loops tend to require more code');
console.log('for loops have the iterations and conditions manually entered, for in loops are have their iterations determined by the object"s contents');
console.log('while loops check to see if the conditions are met before executing, do loops check the conditions after executing');
