/*
function solution(my_string) {
  return my_string.split(/[a-zA-Z]/g).map(v => Number(v)).reduce((a,b) => a + b);
}
let my_string = "aAb1B2cC34oOp";
console.log(solution(my_string));
*/
function solution(polynomial) {
  let answer = '';
  let x = 0;
  let t = 0;
  const pol = polynomial.split(' + ');
  pol.forEach((el) => {
    if (el.includes('x')) {
      if (el == 'x') return (x += 1);
      console.log(el);
      return (x += el
        .split('x')
        .map((v) => Number(v))
        .reduce((a, b) => a + b));
    }
    t += Number(el);
  });
  answer =
    t > 0 && x > 1
      ? x + 'x + ' + t
      : t > 0 && x == 1
      ? 'x + '+ t
      : t == 0 && x == 1
      ? 'x'
      : t != 0 && x == 0
      ? t
      : t == 0 && x != 0
      ? x + 'x'
      : '';
      console.log(answer);
  return answer.toString();
}

let polynomial = '5x + 6x + 1 + 1';
solution(polynomial);


