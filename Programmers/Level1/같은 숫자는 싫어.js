'use strict'

// 투포인트 알고리즘으로 풀고싶다고
function solution(arr){
    let answer = [];
    let start = 0, end = 0;
    let i =0;
    // answer = [...new Set(arr)];

    for(let i=0; i<arr.length; i++){
        if(arr[start] === arr[end++]){
            // console.log('1>>>>>>', arr[start], arr[start++])
            console.log('>', i, arr[start], arr[end])
            answer.push(arr[start++]);
            arr[start++];
            arr.shift();
            console.log('>>>>>>>', arr)
        }
    }
    
    return answer;
}

// let arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
// console.log(solution([1,2,3,4,5,6]))