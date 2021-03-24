'use strict'

// 나누어 떨어지는 숫자 배열
// 오름차순 정렬한 배열 반환
// 나누어 떨어지는 숫자 없으면 -1
function solution(arr, divisor){
    let answer = [], res = [];

    for(let i=0; i<arr.length; i++){
        if (arr[i] % divisor === 0) {
            console.log(i, arr[i])
            res.push(arr[i])
        } 
        // else {
        //     console.log(i, -1)
        //     res.push(-1)
        //     // break;
        // }
    }


    res.sort((a,b) => a-b);
    if (res.length === 0) { res.push(-1) } // 나누어 떨어지는 것이 없으면 배열의 길이가 0이니까
    return res;
}

// let arr = [5, 9, 7, 10];
// let divisor = 5;
// console.log(solution(arr, divisor));

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));

// 배열 전체를 돌려서 나누어지는 것들을 배열에 담고, 그 배열을 오름차순으로 정렬


// @ 결과값
// arr = [5, 9, 7, 10], divisor = 5, res = [5, 10]
// arr = [2, 36, 1, 3], divisor = 1, res = [1, 2, 3, 36]
// arr = [3, 2, 6], divisor = 10, res = [-1]