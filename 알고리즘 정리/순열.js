const getCombinations = function (arr, selectNumber) {
  const results = [];
  // 1개를 선택하는 경우 배열의 요소를 그대로 리턴.
  if (selectNumber === 1) return arr.map((el) => [el]);

  //fixed = 고정된 값, index = 배열 순회 위치, origin == arr
  arr.forEach((fixed, index, origin) => {
    //고정된 값을 제외한 나머지 부분
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    //나머지의 조합을 구한다.
    const combination = getCombinations(rest, selectNumber - 1);

    //고정된 요소에 리턴된 조합 붙이기
    const attached = combination.map((el) => [fixed, ...el]);
    //console.log(attached);
    results.push(...attached);
  });
  console.log(results);
  return results;
};
getCombinations([1, 2, 3, 4], 2);
  