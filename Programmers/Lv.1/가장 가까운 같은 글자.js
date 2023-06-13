function solution(s) {
    var answer = [-1];
    let stack = [];
    s.split("").forEach((el,index) =>{
        stack.push(el);
        if(stack.length > 1){
            const t = stack.lastIndexOf(el, stack.length -2);
            t==-1 ? answer.push(t) : answer.push(index - t) 
        }
    });
    return answer;
}
