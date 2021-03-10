'use strict'

// 다이아몬드 별찍기
// 상.하단으로 나누어서 찍기

//     *
//    ***  
//   *****  
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function solution() {
    let res = ''
    let n = 5;

    // 상단
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i; j++){
            res += ' '
        }
        for(let k=0; k<=i*2; k++){
            res += '*'
        }
        res += '\n'
    }

    // 하단
    for(let i=0; i<n; i++){
        // res += i+' '
        for(let j=0; j<=i; j++){
            res += ' '
            // res += 'j'
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