'use strict';

var cars = ['Ford','Dodge','Chevy','Mazda'];
console.log('1. cars.length: '+cars.length);
var moreCars = ['Toyota','Nissian','Lexus','Honda'];
let totalCars = cars.concat(moreCars);
console.log('2. totalCars: ' +totalCars);
console.log('3. totalCars.indexOf("Honda"): ' +totalCars.indexOf('Honda'));
console.log('3. totalCars.indexOf("Ford"): ' +totalCars.lastIndexOf('Ford'));
var stringOfCars = totalCars.join();
console.log('4. stringOfCars: '+stringOfCars);
totalCars = stringOfCars.split(",");
console.log('5. totalCars: '+totalCars);
var carsInReverse = totalCars.reverse();
console.log('6. carsInReverse: '+carsInReverse);
carsInReverse = carsInReverse.sort();
console.log('7. carsInReverse: '+carsInReverse);
alert(carsInReverse.indexOf('Chevy'));
var removedCars = carsInReverse.slice(2,4);
console.log('8. removedCars: '+removedCars);
console.log('9. carsInReverse.splice(1,2): '+carsInReverse.splice(1,2));
console.log('carsInReverse: '+carsInReverse);
carsInReverse.push("Dodge", "Ford");
console.log('10. carsInReverse: '+carsInReverse);
console.log('11. carsInReverse.pop(): '+carsInReverse.pop());
console.log('12. carsInReverse.shift(): '+carsInReverse.shift());
carsInReverse.unshift("Buick");
console.log('13. carsInReverse.unshift("Buick"): '+carsInReverse);
var numbers = [23,45,0,2];
numbers.forEach(function (value,index, numbers){
  numbers[index] = value +2;
});
console.log('14. numbers: '+numbers);
