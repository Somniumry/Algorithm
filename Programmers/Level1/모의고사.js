'use strict'

// 모의고사
// 완전탐색

// 1번 수포자: [1, 2, 3, 4, 5]
// 2번 수포자: [2, 1, 2, 3, 2, 4, 2, 5]
// 3번 수포자: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

// 정답배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람

//+ answers배열에 1,2,3번 수포자 배열을 다 비교
function solution(answers){
    let res = [], answer = [];
    let a = [1, 2, 3, 4, 5];
    let b = [2, 1, 2, 3, 2, 4, 2, 5];
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let acnt = 0, bcnt = 0, ccnt = 0;

    for(let i=0; i<answers.length; i++){ // 5번 돌고
        if(answers[i] === a[i]){
            // console.log(i, 'a >> ', a[i]);
            acnt++;
        }
        if(answers[i] === b[i]){
            // console.log(i, 'b >> ', b[i])
            bcnt++;
        }
        if(answers[i] === c[i]){
            // console.log(i, 'c >> ', c[i])
            ccnt++
        }
    }

    res.push(acnt, bcnt, ccnt);
    let max = Math.max(...res);
    // console.log(max)
    for(let i=0; i<res.length; i++){
        if(res[i] === max){
            answer.push(i+1); // 배열
        }
    }
    return answer;
}

// let answers = [1, 2, 3, 4, 5];
let answers = [1, 3, 2, 4, 2];
console.log(solution(answers));

// ! 풀이방식
// 3개의 배열을 동시에 비교
// 정답자들 중 가장 많이 맞힌 사람 (Math.max())