'use strict'

// ! 23
// 소숫점이 없는 정수를 출력하고자 할 때는 Math.floor()

// ! 24
let input = prompt();
console.log(input.toUpperCase());

// ! 25
// @ 직접
let n = prompt();
console.log(n*n*3.14)

// @ 함수
function circle(n) {
    let res = n*n*3.14
    return res
}

let n = prompt();
console.log(circle(n))

// ! 26
let n = prompt();

let planet1 = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']
let planet2 = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
let idx;

for (let i = 0; i < planet1.length; i++) {
    if (planet1[i] === n) {
        idx = planet1.indexOf(planet1[i])
    }
}

let planet = ''
planet2.forEach((item, index) => {
    if (index === idx) {
        console.log(item)
    }
})

// ! 27
let input = prompt().split(" ");
let value = prompt().split(" ");
let obj = {}
// console.log(input)
// console.log(value)
for(let i=0; i<input.length; i++){
    obj[input[i]] = value[i]
}
console.log(obj)

// ! 28
// ! 문자열은 배열이고 "string"을 리턴
let [a,  b] = prompt(); // @ String
let [a, b] = prompt().split(" ") // @ String
let input = prompt(); // @ String
// let input = prompt().split("") // @ Array
console.log(typeof(string))
// console.log(typeof(a), typeof(b))
// console.log(typeof(input))
// console.log(input)
// console.log(input.length)
for(let i=0; i<input.length-1; i++){
    console.log(input[i], input[i+1])
}

// ! 29
let input = prompt(); // @ 문자열

for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}

// ! 30
let input = prompt()
let vs = prompt()

console.log(input.indexOf(vs))