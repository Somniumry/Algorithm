'use strict'

// 타겟넘버
// DFS
function solution(numbers, target){
    let cnt = 0;
    function DFS(depth, sum){
        if(depth === numbers.length){
            if(sum === target){
                cnt++
            }
        } else {
            DFS(depth+1, sum+numbers[depth]);
            DFS(depth+1, sum-numbers[depth]);
        }
    }
    DFS(0, 0);
    return cnt;
}

let numbers = [1, 1, 1, 1, 1];
let target = 3;

console.log(solution(numbers, target));

// numbers = [1, 1, 1, 1, 1], target = 3, return 5