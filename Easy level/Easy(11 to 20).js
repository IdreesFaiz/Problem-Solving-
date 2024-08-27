//******************************************
//**************11 to 20 *********************
//******************************************

//Question # 11 => The Farm Problem
function cal(chickens, cows, pigs) {
  const total = chickens * 2 + cows * 4 + pigs * 4;
  console.log(total);
}
cal(5, 2, 8);


//Question # 12 => Plus One
var increment = [4,3,2,1]
var work = (+increment.join("") + 1).toString().split("");
console.log(work);
