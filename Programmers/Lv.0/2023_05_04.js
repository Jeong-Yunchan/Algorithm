/*
function solution(my_str, n) {
  var answer = [];
  for(let i =0 ; i * n < my_str.length; i++){
      s = my_str.slice(i*n,i*n+n);
      answer.push(s);
  }
  return answer;
}

let my_str = "abc1Addfggg4556b"	
let n = 6;

console.log(solution(my_str,n));
*/
function solution(array) {
  var answer = 0;
  let ar = [];
  for(let i = 0 ; i < array.length ; i++){
    console.log(array[i]);
  }
  return answer;
}

let array = [7, 17, 77 ];

console.log(solution(array));