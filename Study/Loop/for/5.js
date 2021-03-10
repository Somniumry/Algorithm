'use strict'

// 계단식 별찍기 3

//     *
//    **
//   ***
//  ****
// *****

function solution() {
    let res = ''
    let n = 5;

    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            res += ' '
        }
        for(let k=0; k<=i; k++){
            res += '*'
            // res += k
        }
        res += '\n'
    }
    return res;
}

console.log(solution());