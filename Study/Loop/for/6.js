'use strict'

// 계단식 별찍기 4

// *****
//  ****
//   ***
//    **
//     *

function solution() {
    let res = ''
    let n = 5;

    for(let i=0; i<n; i++){
        for(let k=0; k<=i; k++){
            res += ' '
        }
        for(let j=0; j<n-i; j++){
            res += '*'
        }
        res += '\n'
    }

    return res;
}

console.log(solution());