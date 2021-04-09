'use strict'

// 괄호

function solution(str){
    // console.log(str.length)
    let stack = [];
    let cnt = 0;

    for(let i=0; i<str.length; i++){
        // console.log(i, str[i])
        if(str[i] === '('){
            stack.push(cnt++);
        } else {
            stack.pop(cnt--);
        }
    }

    // console.log(cnt)
    if(cnt === 0) {
        return 'YES'
    } else {
        return 'NO'
    }
}

console.log(solution("(())()))")); // = NO
console.log(solution("(((()())()")); // = NO
console.log(solution("(()())((()))")); // = YES
console.log(solution("((()()(()))(((())))()")) // = NO
console.log(solution("()()()()(()()())()")); // = YES
console.log(solution("(()((())()(")); // = NO