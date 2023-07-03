function solution(maps) {
  var answer = [];
  maps = maps.map((v) => v.split(''));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let tmp = 0;
  console.log(maps);
  const bfs = (x, y) => {
    if (x < 0 || x > maps.length - 1 || y < 0 || y > maps[0].length - 1 || maps[x][y] === 'X') return;
    tmp += Number(maps[x][y]);
    maps[x][y] = "X";
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      bfs(nx, ny);
    }
    return tmp;
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      tmp = 0;
      if (maps[i][j] !== 'X') {
        tmp = bfs(i,j);
      }
      if(tmp > 0) answer.push(tmp);
    }
  }
  console.log(answer);
  console.log(maps);
  return answer.length > 0 ? answer.sort() : [-1]
}
const maps = ["X591X","X1X5X","X231X", "1X1X1"];
solution(maps);
