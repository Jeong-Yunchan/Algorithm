function solution(array, commands) {
  var answer = [];
  for(let i = 0 ; i < commands.length ; i++){
    [a, b, c] = commands[i];
    let tmp = array.slice(a-1, b);
    tmp.sort((a,b)=> a- b);
    answer.push(tmp[c-1]);
  }
  return answer;
}
array =[1, 5, 2, 6, 3, 7, 4];
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));
