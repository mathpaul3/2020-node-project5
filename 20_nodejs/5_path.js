// 기본모듈 - path
const pathUtil = require("path");

console.log(__dirname);
console.log(__filename);

let myFile = __filename;
console.log(pathUtil.basename(myFile)); // 5_path.js
console.log(pathUtil.extname(myFile));  // .js

let obj = pathUtil.parse(myFile);   // E:\Javascript\20_nodejs\5_path.js
console.log(obj);