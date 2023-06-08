function solution(keymap, targets) {
  var answer = [];
  console.log(targets);
  targets.forEach((el) => {
    let count = 0;
    const arr = el.split('');
    for (let i = 0; i < arr.length; i++) {
      let tmp = 101;
      for (let j = 0; j < keymap.length; j++) {
        let index = keymap[j].indexOf(arr[i]);
        if (tmp > index && index >= 0) tmp = index+1;
      }
      if(tmp == 101){
        answer.push(-1);
        return;
      }
      console.log(tmp);
      count += tmp;
    }
    answer.push(count);
  });
  console.log(answer);
  return answer;
}
const keymap = ["AA"]
const targets = ["B"]
solution(keymap, targets);
