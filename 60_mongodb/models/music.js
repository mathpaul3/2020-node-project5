const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  singer: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    type: Date, // 현재 일시
  },
});

// 모델명s -> 컬렉션이 만들어짐
module.exports = mongoose.model("music", MusicSchema); //("music", MusicSchema, "musics") 이렇게 세번째 인자로 컬렉션 명 설정가능
