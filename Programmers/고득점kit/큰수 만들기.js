function solution(number, k) {
  const arr=[];
  for(let i=0;i<number.length;i+=1){
      while(arr.length>0 && arr[arr.length-1]<number[i] && k>0){
          k-=1;
          arr.pop();
      }
      arr.push(number[i]);
      console.log(arr);
  }
  let t = arr.splice(number.length-k,k);
  console.log("t :",t)
  return arr.join('');
}

const number = "4177252841";
const k =4;
solution(number,k);