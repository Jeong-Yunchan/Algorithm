function solution(numbers) {
  // 먼저 numbers의 길이 만큼 -1을 채운 배열을 만들어준다.
  const answer = Array.from({ length: numbers.length }, () => -1);

  // 인덱스를 넣어줄 배열
  const idxs = [];

  // numbers의 길이 만큼 for문을 돌려 하나씩 확인한다.
  for (let i = 0; i < numbers.length; i++) {
    console.log("idx:"+idxs);
    // idxs를 하나씩 확인해준다.
    // 조건 - 인덱스가 존재하고 해당 존재하는 인덱스 순서의 숫자가 현재 수 보다 낮을경우 
    while (idxs.length && numbers[idxs[idxs.length - 1]] < numbers[i]) {
      
      // answer의 인덱스 위치에 현재 들어온 수를 넣어준다.
      answer[idxs.pop()] = numbers[i];
    }

    // 현재 인덱스를 넣어준다.
    idxs.push(i);
    console.log(answer);
  }

  // 마지막은 확인할 수 없으므로 미리 셋팅한 -1 그대로다
  return answer;
}

const numbers = [9, 1, 5, 3, 6, 2]
solution(numbers);