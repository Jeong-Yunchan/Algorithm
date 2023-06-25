function solution(N, number) {
    var use = Array.from(new Array(9), () => new Set());
    if(N==number) return 1;
    else {
        use.forEach((element, index) => {
            if (index !== 0) element.add(Number(String(N).repeat(index)));
        });
        for(var i=1 ; i<=8 ; ++i) {
            for(var j=1 ; j<i ; ++j) {
                for(var first of use[j]) {
                    for(var second of use[i-j]) {
                        use[i].add(first+second);
                        use[i].add(first-second);
                        use[i].add(first*second);
                        use[i].add(first/second);
                    }
                } 
            }
            if(use[i].has(number)) return i;
        }
        return -1;
    }
}