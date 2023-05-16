// function solution(lines) {
//   var answer = 0;
//   let arr = new Array(200);
//   arr.fill(0);
//   for (let i = 0; i < 3; i++) {
//     let a = lines[i][0];
//     let b = lines[i][1];
//     for (let j = a; j < b; j++) {
//       arr[j + 100] += 1;
//     }
//   }
//   console.log(arr)
//   for (let i of arr) {
//     if (i > 1) answer++;
//   }
//   return answer;
// }
// let lines = [
//   [-4, 1],
//   [0, 5],
//   [0, 5],
// ];

function solution(dots) {
  var answer = 0;

  let a = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]);
  let b = (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0]);
  if(a == b) return 1;

  let c = (dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0]);
  let d = (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0]);
  if(c == d) return 1;

  let e = (dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0]);
  let f = (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0]);
  if(e == f) return 1;
  return 0;
}
let dots = [[1, 4], [9, 2], [3, 8], [11, 6]];
console.log(solution(dots));
