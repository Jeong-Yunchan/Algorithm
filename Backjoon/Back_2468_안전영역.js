const fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt'
  )
  .toString()
  .split('\n');

const n = input.shift();
const arr = input.map((item) => item.split(' ').map(Number));
let tmp = JSON.parse(JSON.stringify(arr));
let answer = [];
let count = 0;

let bfs = (x, y, t) => {
  if(x < 0 || x >= n || y < 0 || y >= n || tmp[x][y] <= t) return;
  tmp[x][y] = 0;
  console.log(tmp);
  bfs(x-1,y,t);
  bfs(x+1,y,t);
  bfs(x,y-1,t);
  bfs(x,y+1,t);
};

for (let t = 0; t <= 100; t++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if(tmp[i][j] > t) {
        count++;
        bfs(i,j,t);
      }
    }
  }
  if(count === 0) break;
  answer.push(count);
  count =0;
  tmp = JSON.parse(JSON.stringify(arr));
}
console.log(answer);
console.log(Math.max(...answer));

