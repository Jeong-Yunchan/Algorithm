function solution(distance, rocks, n) {
  rocks.sort((a,b) => a - b);
  let min = 0;
  let max = distance;
  while(min < max){
    let remove = 0;
    let prev = 0;
    let mid = Math.floor((min+max)/2);

    for(let i = 0 ; i < rocks.length ; i++){
      if(rocks[i] - prev < mid){
        remove++;
      }else{
        prev= rocks[i];
      }
    }
    if(remove > n){
      max = mid-1;
    }else{
      min = mid+1;
    }
  }
  return min;
}
const distance = 25;
const rocks = [2, 14, 11, 21, 17];
const n = 2;
solution(distance,rocks,n);

