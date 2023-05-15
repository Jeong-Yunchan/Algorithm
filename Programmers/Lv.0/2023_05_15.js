/*function solution(numlist, n) {
  var answer = [];
  let avg = numlist.map((v) => Math.abs(v - n));
  let sort = avg.slice().sort((a, b) => a - b);
  sort.forEach(el =>{
    if(numlist.includes(n + el)&& !answer.includes(n+el)){
      answer.push(n+el);
    }else if(numlist.includes(n - el)){
      answer.push(n-el);  
    }
  });
  

  console.log(avg, sort, answer);
  return answer;
}

let numlist = [1, 2, 3, 4, 5, 6];
let n = 4;
solution(numlist, n);
*/
function solution(a, b) {
  var answer = 0;
  // 최대공약수 알고리즘
  let gcd = 1;
  for (let i = 0; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  a = a / gcd;
  b = b / gcd;
  
  while (b % 2 == 0) b /= 2;
  while (b % 5 == 0) b /= 5;
  answer = (b==1) ? 1 : 2;
  return answer;
}
let a = 7;
let b = 20;
solution(a, b);
