function solution(routes) {
  let answer = 0;
  let cam = -30001;
  routes.sort((a,b) => a[1]  - b[1]);
  for(let i = 0 ; i < routes.length ; i++){
    if(cam < routes[i][0]){
      cam = routes[i][1]; answer++;
    }   
  }
  console.log(answer);
  return answer;
}

const routes =[[-9,-5], [-4,-2], [-1,4], [1,5], [-3,6],[2,10],[7,12]];
solution(routes);