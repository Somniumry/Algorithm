'use strict'

// 문자열 내림차순을 배치하기
// 큰것부터 작은 순으로 정렬(내림차순)
function solution(s){
    let answer = '';
    // answer = s.split("").sort(); // 문자열 오름차순 정렬
    // answer = s.split("").sort().reverse() // 문자열 내림차순 정렬
    answer = s.split("").sort().reverse().join('');
    return answer
}

// console.log(solution("Zbcdefg"));
console.log(solution("Leavhp"))

// ! 결과값 "gfedcbZ"
// 문자열 정렬(sort) 블로그에 추가 정리해야겠다.