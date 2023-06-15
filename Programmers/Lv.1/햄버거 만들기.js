function solution(ingredients) {
  var answer = 0;
  let ingredient = [];
  for (let i = 0; i < ingredients.length; i++) {
    ingredient.push(ingredients[i]);
    if(ingredient[ingredient.length-1] ===1 && ingredient[ingredient.length-4] === 1 && ingredient[ingredient.length-3] === 2 && ingredient[ingredient.length -2] ===3){
      ingredient.pop();
      ingredient.pop();
      ingredient.pop();
      ingredient.pop();
      answer += 1;
    }
  }
  return answer;
}
const ingredients = [1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1];
solution(ingredients);
