function solution(n, k, enemy) {
  var answer = 0;
  let arr = Array.from({length:1000001},() => 0);
  let min = 1000000;
  for(let i = 0 ; i < k ; i++){
    arr[enemy[i]]++;
    if(enemy[i] < min) min = enemy[i];
  }
  let hp = n;  
  for (let i = k; i < enemy.length; i++) {
    console.log(arr);
    if (hp < 0) return answer + k - 1;
    if (enemy[i] > min) {
      hp -= min;
      arr[enemy[i]]++;
      arr[min]--;
      for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
          min = i;
          break;
        }
      }      
      answer++;
    } else {
      hp -= enemy[i];
      answer++;
    }
  }
  if (hp < 0) return answer + k - 1;
  else if (enemy.length <= k) return enemy.length;
  else return answer + k;
}
const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];
console.log(solution(n, k, enemy));
