'use strict'

// substr(start, length)
function solution(s){
    let answer = '';

    for(let i=0; i<s.length; i++){
        if(s.length%2 === 0){
            answer = s.substr(s.length/2-1, 2)
        } else {
            answer = s.substr(s.length/2, 1)
        }
    }
    return answer;
}

let s = 'abcdef';
console.log(solution(s));