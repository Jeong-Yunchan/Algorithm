function solution(number, limit, power) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      if (Math.sqrt(i) === j) count++;
      else if (i % j === 0) count += 2;
    }
    count > limit ? (answer += power) : (answer += count);
  }
  return answer;
}
const number = 5;
const limit = 3;
const power = 2;
solution(number, limit, power);
