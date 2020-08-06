const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const port = 3000;

// 바디파서 설정(middleware)
// true: qs(확장모듈), false: querystring(기본모듈)
// content type : x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// 메시지가 JSON인 경우 메시지를 분석해주는 바디파서 설정
app.use(bodyParser.json());

// 정적 파일 위치 설정
// 127.0.0.1:3000/music.html
app.use(express.static("public")); // html을 요청하면 public/xx.html을 우선 실행
// 127.0.0.1:3000/static/music.html
// app.use("/static", express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// 로깅 설정
app.use(logger("dev")); // tiny, dev, short, common, combined

app.get("/", (req, res) => res.send("안녕, 세상아!!"));

// 127.0.0.1:3000/hello?name=홍길동
// % + 16진수
// 127.0.0.1:3000/?singer=아이유&title=좋은날
// URL : Query String
app.get("/hello", (req, res) => {
  console.log(req);
  const name = req.query.name;
  res.send(`query string(get) -> 안녕하세요, ${name}님`);
});

// URL 파라메터
// 127.0.0.1:3000/아이유/좋은날
app.get("/:singer/:title", (req, res) => {
  //   console.log(req);
  //   const singer = req.params.singer;
  //   const title = req.params.title;
  //  ES6 (객체 구조 분해)
  const { singer, title } = req.params; // {singer:xx, title:xx}
  res.send(`url parameter(get) -> ${singer}의 ${title}`);
});

// HTTP Message (Header + Body)
// GET : Header에 데이터를 담음, 길이 제한 O, 캐싱
// POST : Body에 데이터를 담음, 길이 제한 X
// 로그인 페이지 : id, pwd
// www.ooo.com/?no=10001 -> 해킹사고
app.post("/music", (req, res) => {
  console.log(req.body); // body-parser 설정
  // 아이유의 좋은날입니다
  const { singer, title } = req.body;
  res.send(`form urlencoded(post) -> ${singer}의 ${title}`);
});

// URL 파라미터 방식 (REST API)
app.post("/music/:singer/:title", (req, res) => {
  const { singer, title } = req.params; // {singer:xx, title:xx}
  res.send(`url parameter(post) -> ${singer}의 ${title}`);
});

// PUT : http://localhost:3000/music/:id -> req.params.xx
// { singer: 아이유, title: 좋은날 } -> req.body.xx
// 결과 : {id} = > 아이유의 좋은날로 수정됨
app.put("/music/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  const { singer, title } = req.body;
  res.send(`${id} -> ${singer}의 ${title}로 수정됨`);
});

// 여기까지 내려왔다는 것은 위에서 처리가 안 된 것
app.use((req, res, next) => {
  // throw new Error("없는 페이지입니다.");
  const error = new Error("없는 페이지입니다.");
  error.code = 404;
  next(error);
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  // if (err.code) res.status(err.code);
  // else res.status(err.code 500);
  res.status(err.code || 500);
  // if (err.message) res.send(err.message);
  // else res.send("Internal Server Error");
  res.send(err.message || "Internal Server Error");
});

// get
// - query string : req.query.xxx
// - url parameter : req.params.xxx
// post
// - form : req.body.xxx -> body-parser
// - url parameter : req.params.xxx

// REST API
// HTTP 경로로 자원을 요청 (모든 자원은 명사로 식별)
// 사용자 조회 : 127.0.0.1:3000/searchUser?id=100
// -> 127.0.0.1:3000/user/100
// HTTP 메소드 (CRUD // Create, Read, Update, Delete)
// 1. GET : 자원을 조회     -> 127.0.0.1:3000/user
// 2. POST : 자원을 생성    -> 127.0.0.1:3000/user GET이랑 URL 같음. 메소드로 구분
// 3. PUT : 자원을 갱신     -> 127.0.0.1:3000/user/100
// 4. DELETE : 자원을 삭제  -> 127.0.0.1:3000/user/100

// (bad case) (모든 자원은 명사로 식별해야함)
// test.com/user/search
// test.com/user/create
// test.com/user/update
// test.com/user/delete
