const fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString().split('\n');
const score = {
  0 : "E",
  1 : "A",
  2 : "B",
  3 : "C",
  4 : "D"
}
for(let i = 0 ; i < input.length ; i++){
  let count = input[i].split(' ').filter(v => v == 0).length;
  console.log(score[count]);
}