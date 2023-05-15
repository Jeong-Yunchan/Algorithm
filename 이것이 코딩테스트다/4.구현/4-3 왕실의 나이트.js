const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/이것이 코딩테스트다/stdin.txt'
  )
  .toString()
  .split('');

let row = parseInt(input[1]);
let column = input[0].charCodeAt() - 96;
const pos = [row, column];

const step = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

let count = 0;

for(let i = 0 ; i < step.length ; i++){
  let Npos = [pos[0] + step[i][0], pos[1] + step[i][1]];
  if( Npos[0] > 0 && Npos[1] > 0) count++
}
console.log(count);