function solution(cards) {
  let check = Array.from({length:cards.length},(_,i)=>0);
  let arr = [];
  for(let i = 0 ; i < cards.length ; i++){
    if(check[i] === 0){
      check[i] = 1;
      let cnt = 1;
      let pos = cards[i];
      while(true){
        if(check[pos-1] === 1){
          arr.push(cnt);
          break;
        }
        check[pos - 1] = 1;
        pos = cards[pos-1];
        cnt++;  
      }
    }
  }
  arr.sort((a,b) => b - a);
  console.log(arr);
  return arr.length > 1 ? arr[0]*arr[1] : 0;
}
const cards = [2,1];
console.log(solution(cards));
