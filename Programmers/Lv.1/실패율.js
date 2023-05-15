function solution(N, stages) {
  var answer = [];
  let tmp = 0;
  let map = new Map();
  for(let i = 1 ; i < N+1 ; i++){
    tmp =  stages.filter(stage => stage == i).length / stages.filter(stage => stage >= i).length 
    map.set(i, tmp);
  }
  let sor = [...map];
  sor.sort((a,b)=> b[1] - a[1]);
  let nmap = new Map(sor);
  answer = Array.from(nmap.keys());
  return answer;
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));