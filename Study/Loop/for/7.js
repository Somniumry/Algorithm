'use strict'

// 역정삼각형

// *********
//  *******
//   *****
//    ***
//     *

function solution(){
    let res = ''
    let n = 5;

    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            res += ' '
        }
        for(let k=1; k<(n-i)*2; k++){
            res += '*'
            // res += k
        }
        res += '\n'
    }
    return res;
}

console.log(solution());