//******************************************
//**************1 to 10 *********************
//******************************************

//Question # 1 => Find the length of Array
var temp = 0;
function Find(arr) {
  if (Array.isArray(arr)) {
    arr.forEach((element) => {
      Find(element);
    });
  } else {
    temp++;
  }
  console.log(temp);
}
var arr = [1, 2, 3, [4, 5, [6, [7]]]];
Find(arr);
console.log(temp);



//Question # 2 =>  Two Sum
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
function sum(numb , target){
  for (let i = 0; i <  numb.length; i++) {
    console.log(numb[i]);
    for(let j = 1 ; j< numb.length ; j++){
      console.log(numb[j]);
      if((numb[i] + numb[j]) == target){
        return [i ,j]
      }
      else{
        console.log("no match the pair");
      }
    }
  }
}
var numb = [2, 7, 11, 15] , target = 9; 
console.log(sum(numb, target));



//Question # 2 =>  Add Two Numbers
var l1 = [2,4,3] , l2 = [5,6,4] 
var Rl1 = +(l1.reverse().join(""))
var Rl2 = +(l2.reverse().join(""))
var Result = Rl1+ Rl2
var changeResult = Result.toString().split('').reverse()
console.log(changeResult);



