// 3. 함수
// 첫번째 방식
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5

// 두번째 방식 (익명함수)
var add2 = function (a, b) {
    return a + b;
}

console.log(add2(2, 3)); // 5
console.log(typeof add2);

// 세번째 방식
var add3 = (function (a, b) {
    return a + b;
})(2, 3);

console.log(add3);

// 네번째 방식 (ES6, arrow function)
var add4 = ((a, b) => {
    return a + b;
})(2, 3);

console.log(add4);

var add5 = (a, b) => a +b;
console.log(add5(2, 3));