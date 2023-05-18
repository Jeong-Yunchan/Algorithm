function solution(brown, yellow) {
  let all = brown + yellow;
  let answer = [];
  for (let wid = all - 1; wid > 0; wid--) {
    if (all % wid != 0) continue;
    let he = all / wid;
    let ye = (wid - 2) * (he - 2);
    let br = all - ye;

    if (ye == yellow && br == brown) {
      answer = [wid, he];
      break;
    }
  }
  return answer;
}
let yellow = 2;
let brown = 10;
console.log(solution(brown, yellow));
