const MovieModel = require("../../models/movie.js");
const mongoose = require("mongoose");

// id 유효성 체크
const checkId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).end();
  }
  next();
};

// 목록조회 (localhost:3000/api/music?limit=10)
// - 성공 : limit 수만큼 movie 객체를 담은 배열을 리턴 (200: OK)
// - 실패 : limit가 숫자형이 아닐 경우 400 응답 (400: Bad Request)
const list = (req, res) => {
  let limit = req.query.limit || 10; // string
  limit = parseInt(limit, 10); // number

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  MovieModel.find((err, result) => {
    if (err) return res.status(500); // Internal server error
    // res.json(result);
    res.render("movie/list", { result: result });
  })
    .limit(limit)
    .sort({ created: -1 });
};

// 상세조회
// - 성공 : limit 수만큼 movie 객체를 담은 배열을 리턴 (200: OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const detail = (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();

  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) res.status(404).end();

    res.render("movie/detail", { result: result });
  });
};

// 등록 (localhost:3000/api/movie)
// - 성공 : 입력값으로 User 객체를 생성 후 배열에 추가 (201 : Created)
// - 실패 : title, director, year 값 누락 시 400 응답 (400: Bad Request)
const create = (req, res) => {
  const { title, director, year } = req.body;
  if (!title || !director || !year)
    return res.status(400).send("필수값 미입력");

  MovieModel.create({ title, director, year }, (err, result) => {
    if (err) return res.status(500).send("등록 오류 발생");
    res.status(201).json(result);
  });
};

// 수정 (localhost:3000/api/movie/:id)
// - 성공 : id에 해당하는 객체의 정보를 수정 후 반환 (200 : OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const update = (req, res) => {
  const id = req.params.id;
  // id가 유효한지 체크
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();

  const { title, director, year } = req.body;

  MovieModel.findByIdAndUpdate(
    id,
    { director, title, year },
    { new: true },
    (err, result) => {
      if (err) return res.status(500).send("수정 오류가 발생했습니다");
      if (!result) res.status(404).send("해당하는 정보가 없습니다");
      res.json(result);
    }
  );
};

// 삭제
// - 성공 : id에 해당하는 music 객체 삭제 후 결과 배열 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const remove = (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();

  MovieModel.findByIdAndRemove(id, (err, result) => {
    if (err) return res.status(500).send("삭제 오류가 발생했습니다.");
    if (!result) res.status(404).send("해당하는 정보가 없습니다");
    res.json(result);
  });
};

const showCreatePage = (req, res) => {
  res.render("movie/create");
};

const showUpdatePage = (req, res) => {
  const id = req.params.id;

  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회 오류 발생");
    if (!result) return res.status(404).send("잘못된 id");
    res.render("movie/update", { result });
  });
};

module.exports = {
  list,
  detail,
  create,
  update,
  remove,
  checkId,
  showCreatePage,
  showUpdatePage,
};
