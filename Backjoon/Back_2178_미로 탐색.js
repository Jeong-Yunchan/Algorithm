const fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt'
  )
  .toString()
  .split('\n');

const [N,M] = input.shift().split(' ');
let arr = input.map(v=> v.split('').map(v =>Number(v)));
let que = [];
const dx = [-1,1,0,0];
const dy = [0,0,1,-1];

const bfs = (x,y) => {
  que.push([0,0,1]);
  while(que.length){    
    [x,y]=que.shift();
    for(let i = 0 ; i < 4 ;i++){
      nx = x + dx[i];
      ny = y + dy[i];
      if(nx < 0 || nx >= N || ny < 0 || ny >= M || arr[nx][ny] === 0 ) continue;
      if(arr[nx][ny] === 1){
        arr[nx][ny] = arr[x][y] + 1;
        que.push([nx,ny]);
      }
    }
  }
}
bfs(0,0);
console.log(arr[N-1][M-1]);