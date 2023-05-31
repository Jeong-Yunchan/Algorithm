function solution(n) {
  var answer = 0;
  if (Math.sqrt(n) % 1 == 0) answer = (Math.sqrt(n) + 1) ** 2;
  else answer = -1;
  return answer;
}
