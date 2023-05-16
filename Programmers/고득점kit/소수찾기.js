let answer = 0;
function solution(numbers) {
  let num = numbers.split('');
  let validtion = [];
  for (let i = 1; i < num.length + 1; i++) {
    let isnum;
    if (i === 1) {
      isnum = num.map((v) => Number(v));
      isnum.forEach((el) => {
        if (!validtion.includes(el)) {
          validtion.push(el);
        }
      });
      continue;
    }
    isnum = getCombinations(num, i);
    isnum.forEach((el) => {
      el = Number(el.join(''));
      if (!validtion.includes(el)) {
        validtion.push(el);
      }
    });
  }
  //console.log(validtion);
  validtion.forEach((el) => {
    isPrime(el);
  });
  console.log(answer);
  return answer;
}

//소수판별
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  console.log(num);
  return answer++;
}

//조합
function getCombinations(arr, selecnum) {
  let com = [];
  if (selecnum === 1) return arr.map((v) => [v]);
  arr.forEach((fix, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combination = getCombinations(rest, selecnum - 1);
    const finish = combination.map((v) => [fix, ...v]);
    com.push(...finish);
  });
  return com;
}

let numbers = '013';
solution(numbers);
