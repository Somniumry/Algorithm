'use strict'

// @ prompt() : 문자열입력 / confirm() : 불리언 입력

// ! 문제11
let s = 0;
for (let i = 1; i <= 100; i++) {
    s += i;
}

console.log(s)

// ! 문제 12
class Wizard {
    constructor(health, mana, armor) {
        this.health = health,
        this.mana = mana,
        this.armor = armor
    }

    attack() {
        console.log('파이어볼')
    }
}

const x = new Wizard(545, 210, 10); // 인스턴스
console.log(x.health, x.mana, x.armor);
x.attack();

// class 선언, this

// ! 문제 13
let arr = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

let n = prompt('입력'); // string
console.log(arr[n-1])

// + for문으로 해결해보기


// ! 문제 14
let n = prompt('입력');

if(n%3 === 0) {
    console.log('짝')
} else {
    console.log(n)
}

// ! 문제 15
// @ es6부터 템플릿리터럴이 가능하다.
let n = prompt('입력');

if(n === '김다정'){
    console.log(`안녕하세요. 저는 ${n}입니다.`)
}

// ! 문제 16
let str = prompt('입력');

// @ 1 for문 이용
for (let i = str.length-1; i >= 0; i--) { // str.length-1 은 index가 0부터 시작이니까
    console.log(str[i])
}

// @ 2 함수 이용
let a = str.split('').reverse().join('')
console.log('split() : ', a) ["로", "꾸", "꺼"]
console.log('reverse() : ', a) ["꺼", "꾸", "로"]
console.log(a)
// concat 배열 1, 배열 2
// join 배열 요소

// ! 17
let height = prompt();

if (height >= 150) {
    console.log('YES')
} else {
    console.log('NO')
}

// ! 18
// @ 방법 1
let [a, b, c] = prompt('입력').split(" ")
// @ console.log(a+b+c) prompt String임 그래서 덧셈 안됨 입력받은 a,b,c 형변환 필요
let total = Number(a)+Number(b)+Number(c);
console.log(total/3.0)

// // @ 방법 2
let input = prompt('입력').split(" ")
let sum = 0;
for(let i=0; i<input.length; i++){
    // console.log(input[i])
    // sum += Number(input[i]) // ? OK
    sum += parseInt(input[i]) // ? OK
}
console.log(sum/3.0)

// ! 19
let [a, b] = prompt().split(" ");
console.log(Math.pow(a, b))

// ! 20
let [a, b] = prompt().split(" ");
console.log(a/b, a%b)