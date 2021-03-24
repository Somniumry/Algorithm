'use strict'

// 문자열 내 p와 y의 개수
function solution(s){
    let answer = true;
    let pt = 0, yt = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] === 'p' || s[i] === 'P'){
            pt ++;
        } else if(s[i] === 'y' || s[i] === 'Y'){
            yt++;
        }
    }

    if(pt === yt){
        answer;
    } else answer = false

    return answer;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));


// ! 문제 풀이
// s문자열의 p의 갯수와 y의 갯수가 같으면 true , false