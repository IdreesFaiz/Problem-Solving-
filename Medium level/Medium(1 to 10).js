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
