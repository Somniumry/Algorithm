'use strict'

// 두 정수 사이의 합

function solution(a, b) {
    let answer = 0;

    if(a<=b){
        for(let i=a; i<=b; i++){
            answer += i
            // console.log('>>>>>>>>>>>>>>>>>>>>', i, answer)
        }
    } 
    if(a>b){
        for(let i=b; i<=a; i++){
            answer += i
            // console.log('-----------------------', i, answer)
        }
    }
    
    return answer;
}


console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));