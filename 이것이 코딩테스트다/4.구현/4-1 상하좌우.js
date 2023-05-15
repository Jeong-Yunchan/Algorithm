const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/이것이 코딩테스트다/stdin.txt'
  )
  .toString()
  .split('\n');

const N = input[0];
const data = input[1].split(' ');
let x = 1;
let y = 1;

for (let i = 0; i < data.length; i++) {
  if (data[i] == 'R') {
    if (y == N) y--;
    y++;
  } else if (data[i] == 'L') {
    if (y == 1) y++;
    y--;
  } else if (data[i] == 'U') {
    if (x == 1) x++;
    x--;
  } else if (data[i] == 'D') {
    if (x == N) x--;
    x++;
  }
}
console.log(x, y);
