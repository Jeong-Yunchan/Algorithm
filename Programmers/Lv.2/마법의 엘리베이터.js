function solution(storey) {
  var cnt = 0;
  let stack = [];
  const func = (num,cnt) =>{
    if(num === 1){
      stack.push(cnt+1);
      return 1;
    }
    if(num === 0){
      stack.push(cnt);
      return 1;
    }
    console.log(num);
    func(Math.floor(num/10),cnt+num%10);
    func(Math.floor((num+(10 - num%10))/10),cnt+10-num%10);
  }
  func(storey,cnt);
  console.log(stack);
  return Math.min(...stack);
}
const storey = 123456;
console.log(solution(storey));

/*
function solution(storey) {
  var cnt = 0;
  let stack = [];
  let arr = storey.toString().split('').map(v => Number(v));
  const func = (arr,cnt) =>{
    if(arr.length===0) {
      stack.push(cnt);
      return 1;
    }
    if(arr.length === 1 && arr[0] === 9) {
      stack.push(cnt+2);
      return 1;
    }
    if(arr.length === 1 && arr[0] === 10) {
      stack.push(cnt+1);
      return 1;
    }
    let arr1 = arr.slice(0,arr.length-1);
    console.log("arr1: "+arr1);
    func(arr1, cnt+arr[arr.length-1]);
    let arr2 = arr.slice(0,arr.length-1);
    arr2[arr2.length-1]++;
    console.log("arr2: "+arr2)
    for(let i = arr2.length-1 ; i > 0 ; i--){
      if(arr2[i] === 10){
        arr2[i] = 0;
        arr2[i-1]++;
      } else break;
    }
    func(arr2,cnt+10 - arr[arr.length-1]);
  }
  func(arr,cnt);
  console.log(stack);
  return Math.min(...stack);
}
*/