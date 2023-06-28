function solution(board) {
  var answer = -1;
  let arr = board.map((v) => v.split(''));

  let ocnt = 0;
  let oscore = 0;
  let xscore = 0;
  let xcnt = 0;
  let x1 = [];
  let x2 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === 'O') ocnt++;
      if (arr[i][j] === 'X') xcnt++;
      if (i === j) x1.push(arr[i][j]);
      if (i+j === 2) x2.push(arr[i][j]);
    }
    let tmp = new Set(arr[i]); 
    if (tmp.size === 1 && tmp.has('O')) oscore++;
    if (tmp.size === 1 && tmp.has('X')) xscore++;
  }
  for(let i = 0 ; i < 3 ; i++){
    if(arr[0][i] === "O" && arr[1][i] === "O" && arr[2][i] === "O") oscore++;
    if(arr[0][i] === "X" && arr[1][i] === "X" && arr[2][i] === "X") xscore++;
  }
  let setx1 = new Set(x1);
  let setx2 = new Set(x2);
  if (setx1.size === 1 && setx1.has('O')) oscore++;
  if (setx1.size === 1 && setx1.has('X')) xscore++;
  if (setx2.size === 1 && setx2.has('O')) oscore++;
  if (setx2.size === 1 && setx2.has('X')) xscore++;
   console.log(xcnt, ocnt, oscore, xscore);
 
  if ((xcnt > ocnt || ocnt - xcnt > 1)||(xcnt+ocnt === 9 && ocnt-xcnt !==1)) return 0;
  if((oscore === xscore && oscore > 0)|| (oscore > 0 && xscore > 0)) return 0;
  if((oscore > 0 && ocnt === xcnt) || (xscore > 0 && ocnt > xcnt)) return 0;
  return 1;
}
const board = ['XXO', 'XOO', 'XOO']; 
console.log(solution(board));
