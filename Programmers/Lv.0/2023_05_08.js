/*
function solution(s) {
  var answer = [];

  let arr = Array.from(s);
  arr.sort();
  let tmp ='';
  for(let i = 0 ; i < arr.length; i++){
    if(i == 0){
      answer.push(arr[i]);
      tmp = arr[i];
    }else if(tmp === arr[i] && answer[answer.length-1]==arr[i]){
      answer.pop();
    }else if(tmp === arr[i]){
      continue;
    }
    else{
      answer.push(arr[i])
      tmp = arr[i];
    }
  }
  return answer.join();

}
let s = "abbc"
console.log(solution(s));

function solution(numbers) {
  var answer = [];
  
  let category = {
      "zero" : '0',
      "one" : 1, 
      "two" : 2,
      "three" : 3,
      "four": 4,
      "five" : 5,
      "six" : 6,
      "seven" : 7,
      "eight" : 8, 
      "nine" : 9
  }
  
  let tmp = '';
  let arr = Array.from(numbers);
  for(let i = 0 ; i < arr.length ; i++){
      tmp += numbers[i];
      if(category[tmp]){
        answer.push(category[tmp]);
        tmp = '';
      }
}
  return Number(answer.join(''));
}

let numbers ="onetwothreefourfivesixseveneightninezero";
console.log(solution(numbers));
*/

