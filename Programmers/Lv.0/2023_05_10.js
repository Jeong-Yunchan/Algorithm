/*
function solution(sides) {
  var answer = 0;
  sides.sort((a,b)=>b - a)
  answer = sides[0] >= sides[1] + sides[2] ? 2 : 1 ;
  return answer;
}

function solution(my_string) {
  var answer = '';
  [...my_string].forEach(el => {
      if(answer.includes(el)) return;
      answer += el;
  })
  return answer;
}

function solution(i, j, k) {
  var answer = 0;
  for(; i < j+1; i++){
      let tmp = String(i).split('');
      tmp.forEach(el => {
          if(el == String(k)) answer++;
      })
  }
  return answer;
}

function solution(before, after) {
    var answer = 0;
    for(let el of before){
      after = after.replace(el, '');
    }    
    return (after== '') ? 1 : 0;
}

function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

*/

