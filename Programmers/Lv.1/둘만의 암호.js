function solution(s, skip, index) {
  var answer = '';
  const Alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const arr = Alpha.filter(v => {
    let flag = true;
    skip.split("").forEach(el =>{
      if(v === el) flag = false;
    })
    return flag;
  });
  
  
  s.split("").forEach(el =>{
    let num = arr.indexOf(el) + index;
    while(num > arr.length-1){
      num = num - arr.length;
    }
    answer += arr[num];
  });
  console.log(answer);
  return answer;
}
const s = "y";
const skip = "abcdefghijk";
const index = 20;
solution(s, skip, index)