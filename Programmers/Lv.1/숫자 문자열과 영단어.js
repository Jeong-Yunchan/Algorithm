function solution(s) {
  var answer = '';
    let tmp = '';
  const num = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };
    s.split('').forEach(el=>{
        if(Number(el) >= 0) answer += [el].toString();
        else tmp += el;
        if(num[tmp] >= 0) {
            answer += num[tmp].toString();
            tmp = '';
        }
    });
  return +answer;
}

const s = 	"onezerozero";
solution(s);