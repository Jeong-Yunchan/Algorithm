const nums = [3, 3, 3, 2, 2, 2];

function solution(nums) {
  let numset = new Set(nums);
  let answer = nums.length / 2 < numset.size ? nums.length / 2 : numset.size;
  return answer;
}

console.log(solution(nums));
