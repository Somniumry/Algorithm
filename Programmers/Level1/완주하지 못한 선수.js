'use strict'

function solution(participant, completion){
    let answer = ''

    let a = participant.sort();
    let b = completion.sort();

    for(let i=0; i<a.length; i++){
        if (a[i] !== b[i]) {
            answer += a[i]
            // console.log(i, a[i])
            break;
        }
    }
    return answer;
}

// let participant = ["leo", "kiki", "eden"];
// let completion = ["eden", "kiki"];

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
let completion = ["josipa", "filipa", "marina", "nikola"]

// let participant = ["mislav", "stanko", "mislav", "ana"]
// let completion = ["stanko", "ana", "mislav"]
console.log(solution(participant, completion));