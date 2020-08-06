// 기본모듈 - url
const url = require("url");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url); // /
  console.log(req.method); // GET

  // string -> object
  const obj = url.parse(req.url, true);
  console.log(obj);
  // http://127.0.0.1:3000/?year3&class=5&name=엄호용
  const year = obj.query.year; // 3
  const cls = obj.query.class; // 5
  const name = obj.query.name; // 엄호용
  console.log(year);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  //   res.end("Hello World");
  res.end(`${year}학년 ${cls}반 ${name}입니다. Hi!!`); // 3학년 5반 엄호용입니다.
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
