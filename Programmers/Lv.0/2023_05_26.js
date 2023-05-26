/*
function solution(hp) {
    var answer = 0;
    answer += Math.floor(hp/5);
    let tmp = hp % 5;
    answer += Math.floor(tmp/3);
    tmp = tmp % 3;
    answer += tmp
    return answer;
}
*/
/*
function solution(n) {
    var answer = 0;
    let t = Math.sqrt(n);
    for(let i = 1 ; i < t ; i++){
        if(n % i === 0) answer += 2;
    }
    let a = Math.floor(t);
    if(a**2 == n) answer++;
    return answer;
}
*/
function solution(emergency) {
  var answer = [];
  const soonseo = {};
  const arr = emergency.slice();
  emergency.sort((a, b) => b - a);
  for (let i = 0; i < emergency.length; i++) {
    soonseo[emergency[i]] = i;
  }
  arr.forEach((el) => {
    answer.push(soonseo[el]+1);
  });
  console.log(answer);
  return answer;
}

const emergency = [3, 76, 24];
solution(emergency);
