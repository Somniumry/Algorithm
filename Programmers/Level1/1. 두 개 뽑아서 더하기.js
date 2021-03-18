'use strict'

// 두 개 뽑아서 더하기
// 완전탐색 or 투포인터 알고리즘

// 배열에 담긴 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 오름차순으로 정렬
function solution(numbers){
    let answer = [];
    let sum = 0;
    // let start = end = 0;

    for(let i=0; i<numbers.length-1; i++){
        // sum = 0;
        for(let j=i+1; j<numbers.length; j++){
            console.log(numbers[i], numbers[j])
            sum = numbers[i]+numbers[j]
            answer.push(sum)
        }
        // console.log(answer)
    }

    let res = [...new Set(answer.sort((a, b) => a-b))];
    // let result = [...new Set(res)];
    // console.log(res)
    return res;
}

// let numbers = [2, 1, 3, 4, 1];
let numbers = [5, 0, 2, 7]
console.log(solution(numbers));