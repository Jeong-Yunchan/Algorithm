function solution(board, moves) {
  var answer = 0;
  let stack = [];
  moves.forEach(el =>{
    for(let i = 0 ; i < board.length ; i++){
      const item = board[i][el-1];  
      if(item){
        if(stack[stack.length-1] === item){
          stack.pop();
          answer += 2;
        } else{
          stack.push(item);
        }
        board[i][el-1] = 0;
        break;
      }
    }
  });
  console.log(stack);
  return answer;
}
const board =[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
solution(board,moves);