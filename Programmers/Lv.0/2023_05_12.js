/*function solution(score) {
  // 1. score의 평균 점수를 구한다.
  let avg = score.map(v=>(v[0]+v[1])/2);
  
  // 2. avg를 내림차순으로 정렬한 배열 sort를 선언한다.
  let sorted = avg.slice().sort((a,b)=>b-a);

  // 3. avg의 요소와 동일한 sorted 배열의 index 값에 1을 더한다.
  return avg.map(v => sorted.indexOf(v) + 1);
}*/
let score = [
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
];

function solution(score) {
  // 1. score의 길이와 동일하고, 모든 요소가 1인 배열을 선언한다.
  let answer = new Array(score.length).fill(1)
  
  // 2. score 배열의 각 평균 점수를 계산한 배열 avg를 선언한다.
  const avg = score.map(e => (e[0]+e[1])/2); 

 // 3. 이중 for문을 사용, i번째 값보다 큰 j값이 있다면 i의 값에 1을 더한다.
  for(let i = 0; i < avg.length; i++){
      for(let j = 0; j <avg.length; j++){
          if(avg[i]<avg[j]) answer[i]++;  
      }
      console.log(answer)
  }
  
  return answer;
}

console.log(solution(score));
