function solution(s) {
  var answer = 0;
  let count = 0;
  let other = 0;
  let tmp = ''
  s.split("").forEach(el =>{
      if(tmp == '') tmp = el;
      if(el == tmp) count++
      else other++;
      if(count === other) {
          answer++;
          tmp ='';
      }
  })
  if(other != count) answer++;
  return answer;
}