/*function solution(age) {
  var answer = [];
  age.toString().split('').forEach(el=>{
      let code = String.fromCharCode(Number(el)+65);
      answer.push(code);
  });
  return answer.join().toLowerCase();
}
let age = 23;
solution(age);

function solution(n, k) {
    let answer = 0 ;
    let t = k - Math.floor(n/10);
    return n*12000 + t*2000;
}

function solution(age) {
  var answer = [];
  age.toString().split('').forEach(el=>{
      let code = String.fromCharCode(Number(el)+65);
      answer.push(code);
  });
  return answer.join('').toLowerCase();
}

function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);
}

function solution(my_string, letter) {
    return my_string.split(letter).join('');
}

function solution(angle) {
    var answer = 0;
    answer = angle<90 ? 1 :
    angle == 90 ? 2:
    angle > 90 && angle < 180 ? 3:
    angle == 180 ? 4:
    '';
    return answer;
}


function solution(my_string, n) {
  var answer = '';
  my_string.split('').forEach(el => {
      for(let i = 0 ; i < n ; i ++){
          answer += el;
      }
  });
  return answer;
}

function solution(num_list) {
    var answer = [0,0];
    num_list.forEach(el => {
        if(el%2 == 0) answer[0]++;
        else answer[1]++;
    })
    return answer;
}

function solution(my_string) {
    var answer = '';
    answer = my_string.split('').reverse().join('');
    return answer;
}

function solution(num_list) {
    return num_list.reverse();
}

function solution(money) {
    var answer = [Math.floor(money/5500), money % 5500];
    return answer;
}

function solution(price) {
    var answer = 0;
    answer = price < 100000 ? price :
    price < 300000 ? price * 95 / 100 :
    price < 500000 ? price * 90 / 100 :
    price >= 500000 ? price * 80 /100 :
    '';
    return Math.floor(answer);
}

function solution(numbers) {
    const len = numbers.length;
    let sum = numbers.reduce((acc,cur) => {
        acc += cur
        return acc;
    });
    return sum/len;
}

function solution(n) {
    return Math.ceil(n/7);
}

function solution(n) {
    var answer = 0;
    for(let i = 1 ; i <=100 ; i++){
        if((6*i)%n == 0){
            answer = i;
            break;
        }
    }
    return answer;
}

function solution(slice, n) {
    return Math.ceil(n/slice);
}

function solution(n) {
    let arr = Array.from({length:n},(_,i) => i+1);
    return arr.filter(v => v%2 !=0 );
}

*/