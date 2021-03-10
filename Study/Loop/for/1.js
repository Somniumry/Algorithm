'use strict'

// *****
// *****
// *****
// *****
// *****

function solution() {
    let n = 5;
    let res = ''
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            res += '*'
        }
        res += '\n'
    }
    return res;
}


console.log(solution())