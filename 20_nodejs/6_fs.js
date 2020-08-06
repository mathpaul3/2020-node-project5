// 기본모듈 - fs (파일시스템)
const fs = require("fs");

// 파일 읽기
// 동기식
try {
    const data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);
} catch (exception) {
    console.error("동기식 Error:" + exception);
    return;
}

console.log("동기식 읽기 완료");

// 비동기식
fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
        console.error("비동기식 Error:" + err);
    } else {
        console.log(data);
    }
});

console.log("비동기식 읽기 완료");