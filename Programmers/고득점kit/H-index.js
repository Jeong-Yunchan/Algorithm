function solution(citations) {
  var answer = 0;

  citations.sort((a, b)=>b - a);
  if(citations[0]== 0) return 0;
  for(let i = 0 ; i < citations.length ; i++){
    if(citations[i] == i+1){
      answer = i+1;
      break;
    }else if(citations[i] <= i){
      answer = i;
      break;
    }
    if(i+1 == citations.length){
      answer = citations.length;
    }
  }
  console.log(answer);
  return answer;
}
let citations = [1,4];
solution(citations);

//6 5 3 1 0
//1 2 3 4 5

//4 1
//1 2  
//0 1 