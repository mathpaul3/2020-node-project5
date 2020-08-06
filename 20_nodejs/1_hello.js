// Hello, World를 출력하는 방법
// Node.js
// 웹 어플리케이션 : 풀스택, 프론트엔드 + 백엔드
// 1. 크롬 V8 엔진 : 노드에서 엔진을 가져와 쓰고 있음
// 2. 이벤트 기반의 비동기 I/O F/W
// 3. 모듈 시스템 기반 : 파일 형태로 모듈 관리 (CommonJS 스펙)

// 1. REPL(Read Eval Print Loop)
// 2. js에서 콘솔에 출력
console.log('Hello, World');

// 3. 웹서버를 통해 출력
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 요청(request), 응답(response) : header + body
const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url)
  // == : 값만 비교, === : 값과 타입 비교
  console.log(1 == "1"); //true
  console.log(1 === "1"); // false

  if (url === "/") {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  } else if (url === "/html") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<body><h1>Hello, World</h1></body>");
    res.end("</html>");
  } else if (url === "/json") { // 127.0.01:3000/json
    const data = { msg: "Hello, World" }
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else {    // 127.0.0.1:3000/hi
    // 404 Not Found, msg => Not found
    res.statusCode = 404; // Not found
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});