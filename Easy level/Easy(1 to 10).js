//******************************************
//**************1 to 10 *********************
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
