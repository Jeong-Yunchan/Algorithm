function solution(n, arr1, arr2) {
  var answer = [];
  let vx = [n][n];
  arr1.forEach(el=> {
  el.toString(2);
  console.log(vx);
  })
  
  return answer;
}

let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
let n = 5;
console.log(solution(n,arr1));