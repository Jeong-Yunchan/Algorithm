function solution(x, y, n) {
  if (x === y) return 0;
  let stack = Array.from({ length: y + 1 }, () => 0);
  let check = [];
  let count = 0;
  let answer = 0;
  let len = 0;
  let len2 = 0;
  check.push(x);
  while (true) {
    if (stack[y] === 1) {
      answer = count;
      break;
    }
    len = check.length;
    for (let i = len2; i < len; i++) {
      a = check[i] * 3;
      b = check[i] * 2;
      c = check[i] + n;
      if (stack[a] === 0 && a <= y) {
        check.push(a);
        stack[a] = 1;
      }
      if (stack[b] === 0 && b <= y) {
        check.push(b);
        stack[b] = 1;
      }
      if (stack[c] === 0 && c <= y) {
        check.push(c);
        stack[c] = 1;
      }
    }
    console.log(check);
    if (len === check.length) return -1;
    len2 = len;
    count++;
  }
  return answer;
}
const x = 2;
const y = 5;
const n = 4;
console.log(solution(x, y, n));

/*
function solution_1(x, y, n) {
  let t = 0;
    let stack = [];
    let answer = 99999999;
    let flag = false;
  const func = (x,y,n,t) =>{
      if(y === x && flag === false) {
        answer = t;
        flag = true
      }
      if(flag === true || y <= 1 || !Number.isInteger(y)|| stack.includes(y)) return 1;
      console.log(stack)
      stack.push(y);
      func(x , y / 3 , n ,t+1);
      func(x , y / 2 , n ,t+1);
      func(x , y - n , n ,t+1);
  }
  func(x,y,n,t);
  if(answer ===99999999) return -1;
  return answer;
}
*/
