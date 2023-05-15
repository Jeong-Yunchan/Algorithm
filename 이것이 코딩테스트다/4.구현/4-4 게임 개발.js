const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/이것이 코딩테스트다/stdin.txt'
  )
  .toString()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
let [row, col, p] = input[1].split(' ').map(Number);
const data = [];
for (let i = 2; i < N + 2; i++) {
  data.push(input[i].split(' '));
}

let b = Array.from(Array(N), () => new Array(M).fill('0'));
let dr = [-1, 0, 1, 0];
let dc = [0, 1, 0, -1];
let count = 1;
let turn_time = 0;

function change_drection(p) {
  p -= 1;
  if (p == -1) p = 3;
  return p;
}

b[row][col] = 1;

while (true) {
  //회전
  p = change_drection(p);
  let c_row = row + dr[p];
  let c_col = col + dc[p];
  //정면에 가보지 않은 칸이 존재하는 경우 이동
  if (b[c_row][c_col] == 0 && data[c_row][c_col] == 0) {
    b[c_row][c_col] = 1;
    row = c_row;
    col = c_col;
    count += 1;
    turn_time = 0;
    continue;
  } else {
    turn_time += 1;
  }
  // 네 방향 모두 갈 수 없는 경우
  if (turn_time == 4) {
    c_row = row - dr[p];
    c_col = col - dc[p];
    // 뒤로 갈 수 있으면 이동
    if (data[c_col][c_row] == 0) {
      row = c_row;
      col = c_col;
    } else {
      break;
    }
    turn_time = 0;
  }
  console.log(b);
}
console.log(count);
