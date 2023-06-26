function solution(board) {
  var answer = 0;
  let arr = [];
  let [row, col] = [0, 0];
  let que = [];
  let visited = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }, () => false)
  );
  let count = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }, () => 0)
  );

  board.forEach((el, index) => {
    if (el.includes('R')) {
      [row, col] = [index, el.indexOf('R')];
    }
    arr.push(el.split(''));
  });

  visited[row][col] = true;
  count[row][col] = 0;
  const bfs = (x, y) => {
    que.push([x, y]);
    while (que.length) {
      console.log(que);
      [row, col] = que.shift();

      visited[row][col] = true;

      if (arr[row][col] === 'G') {
        answer = count[row][col];
        console.log('찾았다.');
        return;
      }

      for (let i = row - 1; i >= 0; i--) {
        if (arr[i][col] === 'D') {
          if (!visited[i + 1][col]) {
            que.push([i + 1, col]);
            visited[i + 1][col] = true;
            count[i + 1][col] = count[row][col] + 1;
            break;
          }else break;
        } else if (i === 0) {
          if (!visited[i][col]) {
            que.push([i, col]);
            visited[i][col] = true;
            count[i][col] = count[row][col] + 1;
            break;
          }
        }
      }

      for (let i = row + 1; i <= arr.length - 1; i++) {
        if (arr[i][col] === 'D') {
          if (!visited[i - 1][col]) {
            que.push([i - 1, col]);
            visited[i - 1][col] = true;
            count[i - 1][col] = count[row][col] + 1;
            break;
          }else break;
        } else if (i === arr.length - 1) {
          if (!visited[i][col]) {
            que.push([i, col]);
            visited[i][col] = true;
            count[i][col] = count[row][col] + 1;
            break;
          }
        }
      }

      for (let i = col - 1; i >= 0; i--) {
        if (arr[row][i] === 'D') {
          if (!visited[row][i + 1]) {
            que.push([row, i + 1]);
            visited[row][i + 1] = true;
            count[row][i + 1] = count[row][col] + 1;
            break;
          }else break;
        } else if (i === 0) {
          if (!visited[row][i]) {
            que.push([row, i]);
            visited[row][i] = true;
            count[row][i] = count[row][col] + 1;
            break;
          }
        }
      }

      for (let i = col + 1; i <= arr[0].length - 1; i++) {
        if (arr[row][i] === 'D') {
          if (!visited[row][i - 1]) {
            que.push([row, i - 1]);
            visited[row][i - 1] = true;
            count[row][i - 1] = count[row][col] + 1;
            break;
          }else break;
        } else if (i === arr[0].length - 1) {
          if (!visited[row][i]) {
            que.push([row, i]);
            visited[row][i] = true;
            count[row][i] = count[row][col] + 1;
            break;
          }
        }
      }

    }
  };

  bfs(row, col);
  console.log(answer);
  if (answer === 0) answer = -1;
  return count;
}

const board = ['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....'];
solution(board);
