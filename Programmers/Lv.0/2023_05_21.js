/*
function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);
    x = dots[0][1] - dots[1][1];
    dots.sort((a,b) => a[1] - b[1]);
    y = dots[0][0] - dots[1][0];
    return Math.abs(x * y);
}
const dots = [[1, 1], [2, 1], [2, 2], [1, 2]];
console.log(solution(dots));
*/
/*
function solution(strlist) {
    var answer = [];
    strlist.forEach(el => {
        answer.push(el.length;);
    })
    return answer;
}
*/
/*
function solution(s) {
  let arr = [];
  s.split(' ').forEach((el) => {
    if (el == 'Z') {
      arr.pop();
    } else {
      arr.push(Number(el));
    }
  });
  return arr.length > 0 ? arr.reduce((a, b) => a + b) : 0;
}
let s = '10 Z 20 Z';
solution(s);
*/
/*
function solution(n) {
  var answer = [];
  let t = 2;
  while (1) {    
    if (n % t === 0) {
      n = n / t;
      if (!answer.includes(t)) answer.push(t);
    } else if(n % t !== 0) {
      t++;
    }
    if (n === 1) break;
  }
  console.log(answer);
  return answer;
}
const n = 420;
solution(n);
*/