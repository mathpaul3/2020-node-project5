const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  director: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Date,
  },
  created: {
    type: Date,
  },
});

// 모델명s -> 컬렉션이 만들어짐
module.exports = mongoose.model("movie", MovieSchema); //("movie", MovieSchema, "movies") 이렇게 세번째 인자로 컬렉션 명 설정가능
