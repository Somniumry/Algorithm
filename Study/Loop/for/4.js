'use strict'

// 가운데 정렬 삼각형 별찍기

//     *
//    ***
//   *****
//  *******
// *********


// 1. 가운데 나눠서 왼쪽 공백처리
// 2. 가운데 별 찍고
// 3. 반대편 별 찍고

function solution() {
    let res = ''
    let n = 5;

    for(let i=0; i<n; i++){
        for(let j=i; j<n-1; j++){
            res += ' '
        }
        for(let k=0; k<=(i*2); k++){
            res += '*'
        }
        res += '\n'
    }

    return res;
}

function solution() {
    let res = ''
    let n = 5;

    for(let i=0; i<n; i++){
        for(let j=n-1; j>i; j--){
            res += ' '
        }
        for(let k=0; k<=(i*2); k++){
            res += '*'
        }
        res += '\n'
    }
    return res;
}

console.log(solution());