'use strict'

// 문자열 다루기 기본
// 문자 s가 숫자로만 구성되어 있는지 체크
// 문장ㄹ 길이가 4 혹은 6
function solution(s){
    let answer = true;

    if(s.length === 4 || s.length === 6){
        for(let x of s){
            if (x >= 0 && x <= 9){
                answer;
            }else {
                answer = false
            }
        }
    } else {
        answer = false;
    }
    return answer;
}

console.log(solution("a234"));
console.log(solution("1234"));


// ! 정확성 테스트 에러 이유
// 1. 문자열 길이 4 혹은 6에 대한 조건을 입력하지 않음
// 2. 문자열 길이가 4 혹은 6이 아닐 때 조건을 입력하지 않음
// 3. 테스트 에러 9,10 => 숫자 조건을 1부터 9까지 해서 0이 입력될 시 조건에 맞지 않아 에러
//     => 해결 : 숫자조건을 0부터 9까지로 변경