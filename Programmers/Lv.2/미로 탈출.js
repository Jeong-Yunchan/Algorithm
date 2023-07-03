function solution(maps) {
  let Arr = [];
  let S = [0, 0];
  let L = [0, 0];
  let E = [0, 0];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  maps.forEach((el, index) => {
    if (el.includes('S')) S = [index, el.indexOf('S')];
    if (el.includes('L')) L = [index, el.indexOf('L')];
    if (el.includes('E')) E = [index, el.indexOf('E')];
    Arr.push(el.split(''));
  });

  const bfs = (T) => {
    let len = 0;
    let arr = JSON.parse(JSON.stringify(Arr));
    let que = [];
    if (T === S) arr[E[0]][E[1]] = 'O';
    if (T === L) arr[S[0]][S[1]] = 'O';
    que.push(T);
    arr[T[0]][T[1]] = 0;
    while (que.length) {
      const [x, y] = que.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx < 0 ||
          nx > maps.length - 1 ||
          ny < 0 ||
          ny > maps[0].length - 1 ||
          arr[nx][ny] === 'X'
        )
          continue;
        if (arr[nx][ny] === 'L' || arr[nx][ny] === 'E') {
          len = arr[x][y] + 1;
          arr[nx][ny] = arr[x][y] + 1;
        }  
        if (arr[nx][ny] === 'O' && !que.includes([nx,ny])) {
          arr[nx][ny] = arr[x][y] + 1;
          que.push([nx, ny]);
        }
      }
    }
    return len;
  };
  const s = bfs(S);
  const l = bfs(L);

  return s > 0 && l > 0 ? s + l : -1;
}
const maps = ['OOOOS', 'XXXXX', 'LOOOE', 'OOOOO', 'OOOOO'];
solution(maps);
