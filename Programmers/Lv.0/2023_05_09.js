/*
function solution(my_string) {
  var answer = '';
  let strarr = Array.from(my_string);
  strarr.forEach(el => {
      el === el.toUpperCase() ? el = el.toLowerCase() : el = el.toUpperCase();
      answer += el;
  })
  return answer;
}

function solution(cipher, code) {
    var answer = '';
    for(let i = code; i < cipher.length+1 ; i += code){
        answer += cipher[i-1];
    }
    return answer;
}

function solution(order) {
  var answer = 0;
  
  for(let i of String(order)){
      if(i % 3 === 0 && i != 0) answer++;
  }
  return answer;
}
let order = 900000;

function solution(array, n) {
  let tmp = 100;
  let answer = 0;
  for (let i of array) {
    if (Math.abs(n - i) <= tmp) {
      if (Math.abs(n - i) == tmp && answer < i) {
        continue;
      }
      tmp = Math.abs(n - i);
      answer = i;
    }
  }
  console.log(answer);
  return answer;
}
let array = [1, 2, 3, 4, 6];
let n = 5;
solution(array, n);

*/