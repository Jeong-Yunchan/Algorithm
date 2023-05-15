let fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString().split('\n');

const n = input[0];
let count = 0;
const data = input[1].split(' ');

function solution(num) {
  if(num === 1) return false;
  for(let i=2 ; i*i<=num; i++) {
		if(num % i === 0) return false; //num이 i의 배수면 소수가 아니므로 false
	}
  return true;
}

for(let j= 0; j < n ; j++){
  if(solution(parseInt(data[j])) === true) count++;
}
console.log(count);