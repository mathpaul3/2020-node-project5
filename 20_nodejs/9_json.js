// JSON
const singer = {
  name: "NecryTalkie",
  member: ["もっさ", "朝日", "藤田", "中村郁香", "カズマ・タケイ"],
  song: [
    {
      title: "北上のススメ",
      year: 2020,
    },
    {
      title: "ぽんぽこ節",
      year: 2020,
    },
  ],
};

//json object -> string
const str = JSON.stringify(singer);
console.log(str);

// string -> json object
const obj = JSON.parse(str);
console.log(obj);

// 藤田 출력
console.log(obj.member[2]);
// 北上のススメ 출력
console.log(obj.song[0].title);
