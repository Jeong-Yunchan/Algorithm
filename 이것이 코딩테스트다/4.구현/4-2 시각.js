const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/이것이 코딩테스트다/stdin.txt'
  )
  .toString();

const N = Number(input);
let count = 0;

for (let i = 0; i < N + 1; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      if(`${i}${j}${k}`.includes("3")) count++;
    }
  }
}
console.log(count);
