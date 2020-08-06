// 2. 전역객체
// - console : 콘솔과 관련된 기능
// - process : 프로그램과 관련된 기능
// - exports : 모듈과 관련된 기능

console.time("test");
// 처리 로직
console.timeEnd("test");

console.log(process.version);
console.log(process.arch);
console.log(process.memoryUsage());

process.exit();
console.log("찍힐까?");