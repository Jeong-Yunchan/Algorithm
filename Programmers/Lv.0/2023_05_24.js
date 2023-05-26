/*
function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length ; i += n) {
    let tmp = []
    for (let j = 0; j < n; j++) {
      tmp.push(num_list[i+j]);
    }
    answer.push(tmp);
  }
  return answer;
}
let num_list =[1, 2, 3, 4, 5, 6, 7, 8];
let n = 2;
solution(num_list, n);
*/
/*
function solution(dot) {
  let [x, y] = dot;
  let answer = (x < 0 && y > 0) ? 2:
  (x > 0 && y > 0) ? 1:
  (x < 0 && y < 0) ? 3:
  (x > 0 && y < 0) ? 4:
  '';
  return answer;
}
*/ 
