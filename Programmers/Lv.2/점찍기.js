function solution(k, d) {
  var answer = 0;
  let len = d ** 2;
  for (let i = 0; i <= d; i += k) {
    let n = Math.floor(Math.floor(Math.sqrt(len - (i**2))) / k) + 1;
    console.log(n)
    answer += n;
  }
  return answer;
}
const k = 2;
const d = 4;
console.log(solution(k, d));
