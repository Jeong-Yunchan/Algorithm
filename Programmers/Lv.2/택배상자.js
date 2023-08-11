function solution(order) {
  var answer = 0;
  let velt = Array.from({ length: order.length }, (_, i) => i + 1).reverse();
  let stack = [];
  let truck = [];
  let i = 0;
  while (true) {
    if (velt.length > 0) {
      const box = velt.pop();
      if (order[i] === box) {
        truck.push(box);
        i++;
      } else {
        stack.push(box);
      }
    }
    if (stack[stack.length - 1] === order[i] && stack.length > 0) {
      const box = stack.pop();
      truck.push(box);
      i++;
    }
    console.log(truck);
    if (
      velt.length === 0 &&
      (stack.length === 0 || stack[stack.length - 1] !== order[i])
    )
      break;
  }
  return truck.length;
}
const order = [1, 4, 5, 3, 2];
console.log(solution(order));
