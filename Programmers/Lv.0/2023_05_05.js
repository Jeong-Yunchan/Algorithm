/*function solution(quiz) {
  var answer = [];
  quiz.forEach(el =>{    
      let [X ,T, Y, N, R] = el.split(' '); //구조분해할당 이용
      let result = (T == '+') ? Number(X) + Number(Y) : Number(X) - Number(Y);
      (result == R) ? answer.push("O") : answer.push('X');
  })
  return answer;
}

let quiz = ["3 - 4 = -3", "5 + 6 = 11"];

console.log(solution(quiz));

function solution(n) {
  var answer = 0;
  [...String(n)].forEach(el => {
      answer += Number(el);
  })
  return answer;
}

function solution(n, numlist) {
  var answer = [];
  answer = numlist.filter(el => el % n == 0);
  return answer;
}

function solution(s1, s2) {
    var answer = 0;
    s1.forEach(el1 => {
        s2.forEach(el2 => {
            if(el1 == el2) answer++;
        })
    })
    return answer;
}
*/