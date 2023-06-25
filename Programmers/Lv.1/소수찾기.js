function solution(n) {
  var answer = 0;
  if (n > 60) {
    for (let k = 60; k <= n; k++) {
      if (
        k % 2 === 0 ||
        k % 3 === 0 ||
        k % 5 === 0 ||
        k % 7 === 0 ||
        k % 11 === 0 ||
        k % 13 === 0 ||
        k % 17 === 0 ||
        k % 19 === 0 ||
        k % 23 === 0 ||
        k % 29 === 0 ||
        k % 31 === 0 ||
        k % 37 === 0 ||
        k % 41 === 0 ||
        k % 43 === 0 ||
        k % 47 === 0 ||
        k % 53 === 0 ||
        k % 59 === 0
      )
        continue;
      let flag = true;
      for (let j = 60; j * j <= k; j++) {
        if (k % j === 0) {
          flag = false;
          break;
        }
      }
      if (flag === true) answer++;
    }
    answer += 17;
  } else {
    for (let i = 2; i <= n; i++) {
      let flag = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) flag = false;
      }
      if (flag === true) answer++;
    }
  }
  return answer;
}
