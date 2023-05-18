function solution(board) {
  var answer = 0;
  pos = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let arr = JSON.parse(JSON.stringify(board)); //깊은복사 알아두기!!

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (!board[i][j]) continue;

      for(let t = 0 ; t < 8 ; t++){
        let x = i + pos[t][0];
        let y = j + pos[t][1];
        if(x < 0 || x >= board.length || y < 0 || y >= board.length) continue;
        arr[x][y] = 1;
      }
    }
  }
  console.log(arr);
  arr.flat().forEach(el => {
    if(el== 1) answer++;    
  });
  return board.length**2 - answer;
}

const board =[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]];
solution(board);