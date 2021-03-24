'use strict'

// 서울에서 김서방 찾기

// * 서울의 element 중 'Kim'의 위치 x를 찾아, '김서방은 x에 있다' 문자열 반환
function solution(seoul){
    let answer = '';
    
    // seoul.forEach((element, index) => {
    //     // console.log(element, index)
    //     if(element === 'Kim'){
    //         answer = "김서방은 "+index+"에 있다";
    //     }
    // });

    let idx = seoul.indexOf('Kim')
    // console.log(idx)
    answer = "김서방은 "+idx+'에 있다'
    return answer;
}

console.log(solution(["Jane","Kim"]));

// = input  : ["Jane","Kim"]
// = return : "김서방은 1에 있다"

// ! 에러 : forEach는 런타임에러가 발생
