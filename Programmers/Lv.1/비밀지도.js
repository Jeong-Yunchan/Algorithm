function solution(n, arr1, arr2) {
  var answer = [];
  const ar1 = [];
  const ar2 = [];

  arr1.forEach((el) => {
    const tmp1 = String(el.toString(2)).padStart(n, '0');
    ar1.push(tmp1);
  });
  arr2.forEach((el) => {
    const tmp2 = String(el.toString(2)).padStart(n, '0');
  ar2.push(tmp2);
  });
  for (let i = 0; i < n; i++) {
    const tmp = String(Number(ar1[i]) + Number(ar2[i])).padStart(n, '0');
    let str = '';
    for (let i = 0; i < n; i++) {
      if (tmp[i] === '0') str += ' ';
      else str += '#';
    }
    answer.push(str);
  }
  return answer;
}

let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
let n = 5;
console.log(solution(n, arr1, arr2));