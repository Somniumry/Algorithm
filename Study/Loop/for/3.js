'use strict'

// 계단식 별찍기 2
// *****
// ****
// ***
// **
// *

function solution() {
    let res = ''
    let n = 5;

    for(let i=0; i<n; i++){
        // res += i+' '
        for(let j=n; j>i; j--){
            res += '*'
            // res += j
        }
        res += '\n'
    }
    
    return res;
}

function solution() {
    let res = ''
    let n = 5;
    
    for(let i=0; i<n; i++){
       for(let j=i; j<n; j++){
           res += '*'
       }
       res += '\n'
    }

}

console.log(solution());