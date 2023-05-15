const fs = require('fs');
const input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/이것이 코딩테스트다/stdin.txt').toString().split('\n');

const [N,M] = input[0].split(' ').map(Number);
let data = [];
for(let i = 1 ; i < N+1 ; i++){
  data.push(input[i].split(' ').sort((a, b) => a - b).map(Number))
}
let result = data[0][0];
for(let i = 0 ; i < N-1 ; i++){
  if(data[i+1][0] > data[i][0]) result = data[i+1][0];
}
console.log(result);