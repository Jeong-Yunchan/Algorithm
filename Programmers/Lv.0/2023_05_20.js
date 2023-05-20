/*
function solution(numbers) {
    var answer = numbers[0] * numbers[1];
    for(let i = 0 ; i < numbers.length-1; i++){
        for(let j = i+1 ; j < numbers.length; j++){
          let tmp = numbers[i] * numbers[j];
            if(tmp > answer) answer = tmp;
        }
    }
    return answer;
}
*/
/*
function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  keyinput.forEach((el) => {
    if (el === 'left' && x > -1 * Math.floor(board[0] / 2)) x -= 1;
    else if (el === 'right' && x < Math.floor(board[0] / 2)) x += 1;
    else if (el === 'up' && y < Math.floor(board[1] / 2)) y += 1;
    else if (el === 'down' && y > -1 * Math.floor(board[1] / 2)) y -= 1;
  });
  return [x, y];
}
*/
