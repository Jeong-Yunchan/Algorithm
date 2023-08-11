function solution(arrayA, arrayB) {
  var answer = 0;
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  function gcdMultipleNumbers(numbers) {
    if (numbers.length === 0) {
      return null;
    }
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      result = gcd(result, numbers[i]);
    }
    return result;
  }
  let gcdA = gcdMultipleNumbers(arrayA);
  let gcdB = gcdMultipleNumbers(arrayB);
  console.log(gcdA, gcdB);
  if (gcdA > 1 && gcdB > 1) {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayB[i] % gcdA === 0 && gcdB > 1) return gcdB;
      else if (arrayA[i] % gcdB === 0 && gcdA > 1) return gcdA;
    }
    return gcdA > gcdB ? gcdA : gcdB;
  }
  return answer;
}
const arrayA = [10, 20];
const arrayB = [5, 17];
console.log(solution(arrayA, arrayB));

/*
function solution(arrayA, arrayB) {
  var answer = 0;
  const minA = Math.min(...arrayA);
  const minB = Math.min(...arrayB);
  const min = minA > minB ? minA : minB;
  for (let i = min; i > 1; i--) {
    let Acase = 0;
    let Bcase = 0;
    for (let j = 0; j < arrayA.length; j++) {
      if (arrayA[j] % i === 0 && arrayB[j] % i !== 0) Acase++;
      if (arrayA[j] % i !== 0 && arrayB[j] % i === 0) Bcase++;
      if (arrayA[j] % i === 0 && arrayB[j] % i === 0) break;
      if (arrayA[j] % i !== 0 && arrayB[j] % i !== 0) break;
    }
    console.log(Acase, Bcase, i);
    if (Acase === arrayA.length && Bcase === 0) return i;
    if (Bcase === arrayA.length && Acase === 0) return i;
  }
  return answer;
}
*/
