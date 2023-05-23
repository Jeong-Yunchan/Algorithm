/*
function solution(numbers) {
  numbers.sort((a,b) => b - a);
  return numbers[0] * numbers[1];
}
*/
/*
function solution(n) {
  let answer = 0;
  for(let i = 4; i <= n ; i++){
      let check = 0;
      for( let j = 1 ; j <= i ; j++){
          if(i % j === 0) check++;
          if(check > 2) {
              answer++;
              break;
          }
      }
  }
  return answer;
}
let n = 10;
 solution(n);
 */
/*
 function solution(numbers, direction) {
  if(direction == 'left'){
      let tmp = numbers.shift();
      numbers.push(tmp);
  }else{
      let tmp = numbers.pop();
      numbers.unshift(tmp);
  }
  return numbers ;
}
*/
/*
function solution(numbers, k) {
    var answer = 0;
    let person = 1;
    for(let i = 1 ; i < k ; i++){
        person += 2;
        if(person > numbers.length) person -= numbers.length;
    }
    return person;
}
*/
