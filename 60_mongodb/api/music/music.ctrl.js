const MusicModel = require("../../models/music.js");
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
// - 성공 : limit 수만큼 music 객체를 담은 배열을 리턴 (200: OK)
// - 실패 : limit가 숫자형이 아닐 경우 400 응답 (400: Bad Request)
const list = (req, res) => {
  let limit = req.query.limit || 10; // string
  limit = parseInt(limit, 10); // number

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  MusicModel.find((err, result) => {
    if (err) return res.status(500); // Internal server error
    // res.json(result);
    res.render("music/list", { result: result });
  })
    .limit(limit)
    .sort({ created: -1 });
};

// 상세조회
// - 성공 : limit 수만큼 music 객체를 담은 배열을 리턴 (200: OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const detail = (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();
  // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();

  // if (Number.isNaN(id)) {
  //   return res.status(400).end();
  // }
  //
  // // const result = music.find((m) => m.id === id); // {id:xx, singer:xx, title:xx}
  // const result = music.find((m) => m.id === id);
  // if (!result) return res.status(404).end();
  // res.json(result);
  MusicModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) res.status(404).end();

    res.render("music/detail", { result: result });
  });
};

// 등록 (localhost:3000/api/music)
// - 성공 : 입력값으로 User 객체를 생성 후 배열에 추가 (201 : Created)
// - 실패 : singer, title 값 누락 시 400 응답 (400: Bad Request)
const create = (req, res) => {
  const { singer, title } = req.body;
  if (!singer || !title) return res.status(400).send("필수값 미입력");

  // // 1. Model -> Document
  // const music = new MusicModel({ singer, title });
  // music.save((err, result) => {
  //   if (err) return res.status(500).end();
  //   res.status(201).json(result);
  // });
  // 2. Model
  MusicModel.create({ singer, title }, (err, result) => {
    if (err) return res.status(500).send("등록 오류 발생");
    res.status(201).json(result);
  });
};

// 수정 (localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체의 정보를 수정 후 반환 (200 : OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const update = (req, res) => {
  // const id = parseInt(req.params.id, 10);
  // if (Number.isNaN(id)) return res.status(400).end();

  // const result = music.find((m) => m.id === id);
  // if (!result) return res.status(404).end();

  // if (singer) result.singer = singer;
  // if (title) result.title = title;
  // res.json(result);

  const id = req.params.id;
  // id가 유효한지 체크
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();
  const { singer, title } = req.body;

  MusicModel.findByIdAndUpdate(
    id,
    { singer, title },
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

  MusicModel.findByIdAndRemove(id, (err, result) => {
    if (err) return res.status(500).send("삭제 오류가 발생했습니다.");
    if (!result) res.status(404).send("해당하는 정보가 없습니다.");
    res.json(result);
  });
  // const result = music.find((m) => m.id === id);
  // if (!result) return res.status(404).end();

  // music = music.filter((m) => m.id !== id);
  // res.json(music);
};

const showCreatePage = (req, res) => {
  // console.log("called");
  res.render("music/create");
};

const showUpdatePage = (req, res) => {
  const id = req.params.id;

  MusicModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회 오류 발생");
    if (!result) return res.status(404).send("잘못된 id");
    res.render("music/update", { result });
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
