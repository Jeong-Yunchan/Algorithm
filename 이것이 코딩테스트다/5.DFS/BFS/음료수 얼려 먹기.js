/*function solution() {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(i, j) == true) {
        answer++;
      }
    }
  }
  return answer;
}
function dfs(x, y) {
  if(x < 0 || x > N - 1 || y < 0 || y > M - 1) return false;

  if (ice[x][y] == 0) {
    ice[x][y] = 1;

    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

const ice = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];
let [N, M] = [3, 3];

console.log(solution());*/

function countIceCreams(iceTray) {
  const rows = iceTray.length;
  const cols = iceTray[0].length;
  let iceCreamCount = 0;

  function dfs(x, y) {
    if (x < 0 || x >= rows || y < 0 || y >= cols || iceTray[x][y] !== 0) {
      return;
    }

    iceTray[x][y] = 1;

    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (iceTray[i][j] === 0) {
        iceCreamCount++;
        dfs(i, j);
      }
    }
  }

  return iceCreamCount;
}

// Example usage
const iceTray = [
  [0, 0, 1, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0]
];

const totalIceCreams = countIceCreams(iceTray);
console.log("Total ice creams created:", totalIceCreams);
