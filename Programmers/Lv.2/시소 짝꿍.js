function solution(weights) {
  var answer = 0;
  let arr = Array.from({ length: 901 }, () => 0);
  for (let i = 0; i < weights.length; i++) {
    arr[weights[i] - 100]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      const n1 = (i + 100) * 2;
      const n2 = ((i + 100) / 2) * 3;
      const n3 = ((i + 100) / 3) * 4;
      if (arr[n1 - 100]) answer += arr[i] * arr[n1 - 100];
      if (arr[n2 - 100]) answer += arr[i] * arr[n2 - 100];
      if (arr[n3 - 100]) answer += arr[i] * arr[n3 - 100];
    }
    if (arr[i] > 1) answer += (arr[i] * (arr[i] - 1)) / 2;
  }
  return answer;
}
