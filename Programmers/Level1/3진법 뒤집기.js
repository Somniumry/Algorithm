'use strict'

// 3진법 뒤집기
// n을 3진법 -> 앞뒤 뒤집고 -> 10진법으로
// 예시
// 45 -> 1200 -> 0021 -> 7
function solution(n){
    let answer = 0;
    let stack = [];

    // 3진법
    while (n !== 0) {
        stack.push(n%3); // 45의 나머지먼저 넣기 위해 처음에 나머지 계산
        n = parseInt(n/3); 
        // console.log(n, stack) // [0, 0, 2, 1]
    }

    let res = stack.reverse();
    for(let i=0; i<res.length; i++){
        // console.log('>pow', i, res[i], Math.pow(3, i))
        // console.log('>>res', i, Math.pow(3, i)*res[i])
        answer += Math.pow(3, i)*res[i];
    }
    
    return answer;
}

let n = 45;
console.log(solution(n));

// ! 코드해설
/* 
    1. stack.push(n%3)을 먼저 한 이유는 나머지 연산 위치로 인해
    45를 계산한 나머지 0을 넣어야하는데 몫 구하는 코드 아래로 넣으면 45의 나머지 값이 들어가지 않는다.

    [0, 0, 2, 1] 3 -> 10
    3^3 * 0 + 3^2 * 0 + 3^1 * 2 + 3^1 * 1
    27 * 0 + 9 * 0 + 3 * 2 + 3 * 1
    0 + 0 + 6 + 1
    7 
*/