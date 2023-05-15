/*
unction solution(my_string) {
  let numarr = Array.from(my_string.split(' '));
  let answer = Number(numarr.shift());
  let B;

  for (let i = 0; i < my_string.length-1; i++) {
    if (numarr.length > 0) {
      let a = numarr.shift();
      if (a == '+' || a == '-') {
        B = a;
      } else {
        B == '+' ? (answer += Number(a)) : (answer -= Number(a));
      }
      console.log(answer, B);
    }
  }
  return answer;
}

console.log(solution('100 - 1'));
*/

/*function solution(array) {
  var answer = [];
  answer.push(Math.max(...array))
  answer.push(array.indexOf(answer[0]));
  return answer;
}
*/
function solution(n) {
  var answer = [];
  if (n == 1) return [1];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0 && !answer.includes(i)) {
      answer.push(i);
      if (i != n / 2 && i*i != n) answer.push(n / i);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}
console.log(solution(100));
