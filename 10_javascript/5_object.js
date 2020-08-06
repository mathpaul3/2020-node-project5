// 5. 객체
// 객체 선언
let a = {}; // 배열:[], 객체:{}
let b = new Object();
console.log(typeof a);

// 속성(property), 메소드(method)
// key : value
let Person = {
    age: 19,
    name: '홍길동',
    print() {
        console.log("저는 %d살 %s입니다.", this.age, this.name);
    }
}

// object.속성명, object["속성명"]
console.log("저는 %d살 %s입니다.", Person.age, Person.name);
Person.print();

// Friends라는 배열
// 나, 친구 {name: , age:}
// Friends 배열 출력
let Friends = [{name: "엄호용", age: 19}, {name: "嗯", age: 19}];
console.log(Friends);
console.log(Friends[1]["name"]);
// console.log(Friends[1].name);

let score = {
    data: { kor: 100, mat: 90, eng: 95 },
    print: function () {
        for (subject in this.data) {
            console.log(subject + ":" + this.data[subject]);
        }
    },
    sum: function () {
        let s = 0;
        for (subject in this.data) {
            s += this.data[subject];
        }
        return s;
    },
    avg: function () {
        let len = Object.keys(this.data).length;
        return this.sum()/len;
    }
}

score.print();
console.log(score.sum());
console.log(score.avg());

let id = 1;
let name = "홍길동"
// key: value
let obj = {
    id,
    name
}
console.log("%d, %s", obj.id, obj.name);