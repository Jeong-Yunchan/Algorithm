function solution(n, times) {
  times.sort((a,b) => a - b);
  let start =0;
  let end = times[times.length -1] * n;
  let mid = Math.floor((start+end)/2);
  while(start <= end){
    console.log(mid);
    let count = times.reduce((acc,cur) => {
      acc += Math.floor(mid/cur);
      return acc;
    },0);
    if(count >= n){
      end = mid -1;
    }else{
      start = mid +1;
    }
    
    mid = Math.floor((start+end)/2);
  }
  return end;
}

const n = 6;
const times = [7,10];
solution(n,times);