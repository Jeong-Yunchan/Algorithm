function solution(d, budget) {
  var answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (sum > budget) break;
    sum += d[i];
    answer++;
  }
  return sum <= budget ? answer : answer - 1;
}
const d = [2, 2, 4, 4];
const budget = 10;
console.log(solution(d, budget));
