function solution(s) {
  var answer = [];
  let len = 0;
  let num 
  let zero = 0;
  let cnt = 0;
  while(true){
      if(s === '1') break;
      cnt++;
      len = 0;
      s.split('').forEach(el =>{
          if(el === '0') zero++;
          else len += 1;
      });
      num = len.toString(2);
      s = num.toString();
      console.log(cnt,zero, len,num)
  }
  return [cnt,zero];
}
const s = "10";
console.log(solution(s));