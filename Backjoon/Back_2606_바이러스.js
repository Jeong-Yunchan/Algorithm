const fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt'
  )
  .toString()
  .split('\n');

const n = input.shift();

const arr = input.map((item) => item.split('').map(Number));