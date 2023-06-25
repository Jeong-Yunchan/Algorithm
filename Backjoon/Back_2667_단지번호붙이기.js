const fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt'
  )
  .toString()
  .split('\n');

const n = input.shift();
const arr = input.map((item) => item.split('').map(Number));
let stack = [];
const dfs = (x, y) => {
  if (x < 0 || x >= n || y < 0 || y >= n || arr[x][y] !== 1) return;
  arr[x][y] = 0;
  count++;
  dfs(x - 1, y);
  dfs(x + 1, y);
  dfs(x, y - 1);
  dfs(x, y + 1);
};
let count = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) {
      dfs(i, j);
      stack.push(count);
      count = 0;
    }
  }
}
stack.sort((a,b) => a - b);
answer = [stack.length, ...stack];
for(let k = 0 ; k < answer.length ; k++){
  console.log(answer[k]);
}