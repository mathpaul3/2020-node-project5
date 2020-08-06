// 7. ES6
// let, const
// var : 함수레벨 스코프, let : 블럭레벨 스코프
let a = 1;
const PI = 3.14;

// 템플릿 문자열 (백틱 `)
let n1 = "펭", n2 = "수";
// My name is 펭 수.
let name = "My name is " + n1 + " " + n2 + ".";
console.log(name);

let name2 = `My name is ${n1} ${n2}.`;
console.log(name2);

// 화살표 함수
function add(a, b) {
    return a + b;
}

let myAdd = (a, b) => a + b;
myAdd(2, 3);

let result = ((a, b) => a + b)(2, 3);