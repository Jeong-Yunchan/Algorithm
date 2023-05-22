/*
function solution(my_string) {
  var answer = 0;
  my_string.split('').forEach((el) => {
    if (0 >= el || el <= 9) {
      answer += Number(el);
    }
  });
  return answer;
}
my_string = 'aAb1B2cC34oOp';
solution(my_string);
*/
/*
function solution(my_string) {
  let arr = [...my_string].reduce((acc, cur) => {
    if (cur >= 0 || cur <= 9) {
      acc.push(Number(cur));
    }
    acc.sort((a, b) => a - b);
    return acc;
  }, []);
  console.log(arr);
  return arr;
}

const my_string = 'hi12392';
solution(my_string);
*/
/*
function solution(my_string) {
    var answer = '';
    const alpha = 'aeiou'
    my_string.split('').forEach(el=> {
        if(!alpha.includes(el)){
            answer += el;
        }
    });
    return answer;
}
*/
/*
function solution(n) {
  for (let i = 2; i <= 10; i++) {
    if(fac(i) == n) return i; 
    if(fac(i)> n) return i -1;  
  }
}
function fac(n) {
    if (n === 1) return 1;
    else return n * fac(n - 1);
  }
let n = 7;
console.log(solution(n));
*/