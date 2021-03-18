'use strict'

// K번째 수
// 배열이 주어지고, commands는 [i, j, k]
// i부터 j까지 자르고 정렬 후 k번째 수 구하기

function solution(array, commands){
    let answer = [];
    let pu;
    for(let i=0; i<commands.length; i++){
        let res = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b);
        // console.log(res)
        // console.log(commands[i][2])
        // console.log('>', res.slice(commands[i][2]-1, commands[i][2]))
        // answer.push(res.slice(commands[i][2]-1, commands[i][2]));
        // console.log(res[commands[i][2]-1])
        answer.push(res[commands[i][2]-1])
    }
    return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));
