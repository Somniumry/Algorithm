'use strict'

// 계단식 별찍기 1
// *
// **
// ***
// ****
// *****

function solution() {
    let res = ''
    let n = 5;

    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            res += '*'
        }
        res += '\n'
    }
    return res;
}

console.log(solution());