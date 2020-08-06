// 미들웨어 : 뼈대에 들어갈 필요한 기능을 미들웨어로 작성하고
// 어플리케이션(뼈대)에 미들웨어를 추가
const express = require("express");
const moment = require("moment");
const app = express();
const port = 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// 미들웨어 함수 작성
const mw1 = (req, res, next) => {
  console.log("첫번째 미들웨어");
  next();
};

const mw2 = (req, res, next) => {
  console.log("두번째 미들웨어");
  next();
};

// 미들웨어 사용 : 순서가 중요
// 1. 어플리케이션 레벨 미들웨어
app.use(mw2);
app.use(mw1);

// 로깅처리 미들웨어
const logger = (req, res, next) => {
  // req.method, req.url
  const { method, url } = req;
  // const method = req.method;
  // const url = req.url;
  const time = moment().format("YYYY-MM-DD HH:mm:ss:SSS");
  console.log(`${method} - ${url} - ${time}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => res.send("신난당.. 등교다!!!"));

// 2. 라우터 레벨 미들웨어

// 3. 기본 제공 미들웨어
app.use(express.static("public"));

// 4. Third Party 미들웨어
const bodyParser = require("body-parser");
app.use(bodyParser.json());
