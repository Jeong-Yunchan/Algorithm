function solution(cards1, cards2, goal) {
  let answer ='';
  goal.forEach(el =>{
    if(cards1[0] == el){
      cards1.shift();
    }else if(cards2[0] == el){
      cards2.shift();
    }else answer = "No"
  });
  return answer == '' ? "Yes" : "No";
}