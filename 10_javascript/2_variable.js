// 1.변수
// 변수 선언
var a = 1;
var b = 2;
console.log(a, b);
console.log("%d, %d", a, b);

var s1 = "Hello";
var s2 = "World";
console.log(s1, s2);
console.log("%s %s", s1, s2);
// Hello World

console.log(typeof a);
console.log(typeof s1);
console.log(typeof true);
console.log(typeof c);
console.log(typeof {});
console.log(typeof foo);
// console.log(typeof typeof);

// 변수 호이스팅(hoisting)
function foo() {
    console.log(a);
    var a = 10;
    console.log(a);
}

foo();

// ES6(2015) let, const 추가
function foo2() {
    if (true) {
        var tmp = 0;
        console.log("1:", tmp);
    }
    console.log("2:", tmp);
}

foo2();

const PI = 3.14;
// PI++;
