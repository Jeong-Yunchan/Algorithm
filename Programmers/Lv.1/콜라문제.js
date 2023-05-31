function solution(a, b, n) {
  var answer = 0;
  let bottle = n;
  while (true) {
    if (n < a) {
      break;
    }
    bottle -= Math.floor(n / a) * a;
    bottle += Math.floor(n / a) * b;
    answer += Math.floor(n / a) * b;
    n = bottle;
  }
  return answer;
}
