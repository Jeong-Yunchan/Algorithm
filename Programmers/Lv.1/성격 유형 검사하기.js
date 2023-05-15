let survey = 	["TR", "RT", "TR"];
let choices = [4, 4, 4];

function solution(survey, choices) {
  var answer = '';
  let category = {
    R : 0,
    T : 0,
    C : 0,
    F : 0,
    J : 0,
    M : 0,
    A : 0,
    N : 0
  }
  survey.forEach((sur, index) => {
    if(choices[index] - 4 > 0){
      category[sur.split('')[1]] += choices[index] - 4;
    }else if(choices[index] - 4 < 0){
      category[sur.split('')[0]] -= choices[index] - 4;
    }else{

    }
     
  });
  console.log(category);
  
  (category.R < category.T) ? answer += 'T' : answer += 'R';
  (category.C < category.F) ? answer += 'F' : answer += 'C';
  (category.J < category.M) ? answer += 'M': answer += 'J';
  (category.A < category.N) ? answer += 'N' : answer += 'A';

  console.log(answer);
  return answer;
}

solution(survey, choices);