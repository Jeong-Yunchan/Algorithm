function solution(topping) {
  let front = new Set(topping);
  let back = new Set();
  let cnt = 0;
  let check = {};
  for(let i = 0 ; i < topping.length ; i++){
    if(!check[topping[i]]) check[topping[i]]=1;
    else check[topping[i]]++;
  }
  while (front.size >= back.size) {
    const item = topping.pop();
    check[item]--;
    if (check[item]===0) front.delete(item);
    if (!back.has(item)) back.add(item);
    if (front.size === back.size) cnt++;
  }
  if (cnt <= 0) return 0;
  else return cnt;
}
const topping = [1, 2, 2, 2, 2, 2, 3];
console.log(solution(topping));

/*
function solution(topping) {
  let i = 0;
  let j = topping.length-1;
  let front = new Set();
  let back = new Set();
  let all = new Set(topping);
  console.log(all);
  while(true){
    if(back.size >= front.size){
      front.add(topping[i]);
      i++;
    }else{
      back.add(topping[j]);
      j--;
    }
    let check = 0;
    for(let t = i ; t <= j ; t++){
      if(front.has(topping[t])||back.has(topping[t])) check++;
    }
    console.log(front, back , i  , j, check)
    if((check === j - i + 1 && front.size === back.size) || i > j) break;
  }
  if(front.size !== back.size) return 0;
  else return j - i + 2;
}
*/
