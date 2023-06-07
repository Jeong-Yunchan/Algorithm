function solution(n, m, section) {
  var answer = 0;
  let paint = 0;
  for(let i = 0 ; i < section.length ; i++){
      if(paint >= n) break;
      if(paint < section[i]){
          paint = section[i]-1 + m;
          answer++;
      }else{
      continue;
      }
      console.log(paint);
  }
  return answer;
}