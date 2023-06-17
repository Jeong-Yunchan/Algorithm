function solution(X, Y) {
  var answer = '';
  let x = {};
  let y = {};
  let arr = [];
  X.split('').reduce((acc, cur) => {
    if (!x[cur]) x[cur] = 1;
    else x[cur]++;
    return acc;
  }, {});
  Y.split('').reduce((acc, cur) => {
    if (!y[cur]) y[cur] = 1;
    else y[cur]++;
    return acc;
  }, {});
  for (let i = 0; i < 10; i++) {
    if (x[i] > 0 && y[i] > 0) arr.push(x[i] > y[i] ? y[i] : x[i]);
    else arr.push(0);
  }
  for (let i = 9; i >= 0; i--) {
    if (arr[i] > 0) {
      for (let j = 0; j < arr[i]; j++) {
        answer += i.toString();
      }
    }
  }
  if(answer == '') answer = '-1';
  let tmp = new Set(answer.split(''));
  if(tmp.has('0') === true && tmp.size === 1) answer = '0';
  return answer;
}
const X = '00';
const Y = '00';
solution(X, Y);
