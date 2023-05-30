/*function solution(array) {
  let arr = array.reduce((acc,cur) => {
    if(!acc[cur]){
      acc[cur] = 1;
    }else{
      acc[cur]++;
    }
    return acc;
  },{});
  if(Object.keys(arr).length == 1) return array[0];
  let sort = Object.entries(arr).sort((a,b)=> b[1]- a[1]);
  return sort[0][1] > sort[1][1] ? Number(sort[0][0]) : -1;
}
const array = [1,1,1,1,1,1];
solution(array);

function solution(array) {
    array.sort((a,b) => a - b);
    return array[Math.ceil(array.length / 2 -1)];
}

function solution(numbers) {
    return numbers.map(v => v*2);
}

function solution(number1, denom1, number2, denom2) {
  const max = Math.max(denom1, denom2);
  const min = Math.min(denom1, denom2);
  function gcd(max, min) {
    const remainder = max % min;
    if (remainder === 0) return min;
    return gcd(min, remainder);
  }
  let lcm = (denom1 * denom2) / gcd(max, min);
  let a = (lcm / denom1) * number1 + (lcm / denom2) * number2;
  let tmp = gcd(lcm,a);
  return [a/tmp,lcm/tmp];
}

function solution(array, height) {
    return array.filter(v => v> height).length;
}

function solution(array, n) {
    return array.filter(v => v == n).length;
}
*/