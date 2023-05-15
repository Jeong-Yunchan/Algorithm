const s = ')()(';

function solution(s) {
  console.log(s);
  let answer = false;
  let check = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(') {
      check++;
    } else if (s.charAt(i) == ')') {
      check--;
    }
    if(check < 0) return answer;
  }
  if (check == 0) answer = true;

  return answer;
}
console.log(solution(s));
