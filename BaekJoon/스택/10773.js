'use strict'

// 제로

function solution(n, arr){
    let stack = [];
    let sum = 0;
    for(let i=0; i<n; i++){
        if(arr[i] === 0) {
            stack.pop()
        } else {
            stack.push(arr[i])
        }
    }

    if(stack.length === 0) {
        sum;
    } else {
        sum = stack.reduce((acc, cur) => acc+cur);
    }

    return sum;
}

console.log(solution(4, [3, 0, 4, 0])); // = 0
console.log(solution(10, [1, 3, 5, 4, 0, 0, 7, 0, 0, 6])); // = 7