//******************************************
//**************1 to 10 ********************
//******************************************


//Question # 1 => Return the Sum of Two Numbers
var num1 = -3,num2 = 2;
function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log(sum(num1, num2));



//Question # 2 => Convert Minutes into Seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}
const minutes = 60;
const seconds = minutesToSeconds(minutes);
console.log(`${minutes} minutes is equal to ${seconds} seconds.`);



//Question # 3 => Return the Next Number from the Integer Passed
function getNextNumber(number) {
    return number + 1;
}
const myNumber = 5;
const nextNumber = getNextNumber(myNumber);
console.log(nextNumber); 



//Question # 4 => Area of a Triangle
function calculateTriangleArea(base, height) {
    return 0.5 * (base * height)
}
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(area);  



//Question # 5 => Area of a Triangle
function caclAge(age){
  return age*365
}
const age = 20;
const result = caclAge(age)
console.log(result);


//Question # 6 => Power Calculator
//Create a function that takes voltage and current and returns the calculated power.
function calculatePower(voltage, current) {
  return voltage * current;
}
const voltage = 110;  
const current = 3;  
const power = calculatePower(voltage, current);
console.log(power);



//Question # 7 => Maximum Edge of a Triangle
function maxEdge(a, b) {
  return a + b - 1;
}
let a = 7;
let b = 10;
console.log(maxEdge(a, b));  



//Question # 8 => Return the Remainder from Two Numbers
function remainder(a, b) {
  return a % b;
}
let num1 = 10;
let num2 = 3;
console.log(remainder(num1, num2));   // 1


//Question # 9 => Return the Remainder from Two Numbers
function findPerimeter(length, width) {
  return 2 * (length + width);
}
let length = 10;
let width = 5;
console.log(findPerimeter(length, width));   


//Question # 10 => Is the Number Less than or Equal to Zero?
var num = -1 ;
function check(num){
 const b =  num <= 0 ? true : false
 console.log(b); 
}
check(num);