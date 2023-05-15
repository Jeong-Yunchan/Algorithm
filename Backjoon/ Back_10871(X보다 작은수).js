const fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString().split('\n');


const n = input[0].split(' ');
const X = input[1].split(' ');
let arr = [];

for(i = 0 ; i < n[0] ; i++) {
  if(parseInt(X[i]) < parseInt(n[1])) console.log(X[i]);
}

