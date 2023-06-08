function solution(sequence, k) {
  let [left, right] = [0, 0];
  let sum = sequence[0];
  let length = [];
  let tmp = [];
  let min = 0;
  const len = sequence.length;
  while (1) {
    if (sum == k) {
      length.push([left, right]);
      tmp.push(right - left);
    }
    if (left == len - 1 && right == len - 1) break;
    if (sum < k && right < len-1) {
      right++;
      sum += sequence[right];
    } else {
      sum -= sequence[left];
      left++;
    }
  }
  let sort = tmp.slice().sort((a,b) => a - b);

  min = tmp.indexOf(sort[0]);
  console.log(length[min]);
  return length[min];
}
const sequence = 	[1,3,5,7,9];
const k = 12;

solution(sequence, k);
