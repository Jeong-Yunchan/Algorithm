function solution(targets) {
  var answer = 0;
  let tmp = -1;
  targets.sort((a,b) => a[1] - b[1]);
  for(let i = 0 ; i < targets.length ; i++){
    const [s,e] = targets[i];
    if(s >= tmp){
      answer++;
      tmp = e;
    }
  }
  console.log(answer);
  return answer;
}
const targets = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];
solution(targets);