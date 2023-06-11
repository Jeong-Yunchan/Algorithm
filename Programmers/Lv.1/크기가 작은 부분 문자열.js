function solution(t, p) {
  var answer = 0;
  const len = p.length;
  for(let i = 0 ; i < t.length-len+1 ; i += 1){
    const num = t.slice(i,i+len);
    console.log(num);
    if(Number(num) <= Number(p)) answer++;
  }
  return answer;
}
const t = "10203"
const p = "15";
solution(t, p); 