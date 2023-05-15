/*
##옹알이
const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

function solution(babbling) {
  var answer = 0;
  const bab = ["aya", "ye", "woo", "ma"];
  answer = babbling.length;
  babbling.forEach((str,index) => {
    for(k of bab){
      if(str.includes(k)){
        babbling[index] = babbling[index].replace(k, '');
      } 
    }
  });
  console.log(babbling);
  for(k of babbling){
    if(k != ''){
      answer -= 1;
    }
  }
  return answer;
}

solution(babbling);
*/
/*
##다음에 올 숫자
const common = [2,4,8];

function solution(common) {
  var answer = 0;
  let num = 0;
  if(common[1]- common[0] == common[2] - common[1]){
    num = common[1]- common[0];
    answer = common[common.length - 1] + num;
  }else{
    num = common[1] / common[0];
    answer = common[common.length - 1] * num;
  }
  return answer;
}

solution(common);
*/
/*
##연속된 수의 합
let num = 4
let total = 14

function solution(num, total) {
  var answer = [];
  if(num % 2 == 0){
    let middle = Math.ceil((total / (num / 2)) / 2);
    for(let i = middle - (num / 2 - 1) -1 ; i < middle + (num /2) ; i++ ){
      answer.push(i);
    }
  }else{
    let middle = total / num;
    for(let i = middle - (num-1) / 2 ; i < middle + (num) / 2; i++ ){
      answer.push(i);
    }
  }
  console.log(answer);
  return answer;
}
solution(num,total);
*/