import React from "react";
import Hello from "./Hello";
import Hello2 from "./Hello2";
import "./App.css";
import StateSample from "./StateSample";
import StateSample2 from "./StateSample2";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";

// 함수형 컴포넌트
// return (JSX)
// JSX 규칙
// 1. 두개 이상의 태그는 반드시 하나의 태그로 감싸야 함
// 2. 여는 태그와 닫는 태그가 있어야 함
// 3. JSX안에서 javascript 값을 사용할 때에는 {}를 사용함
// 4. 인라인 style 작성 시 객체 형태로 작성 (Camelcase)
// 5. css class 설정 시에는 class -> className
// 6. 주석 작성
// - 열린 태그 내에서 // 작성
function App() {
  return (
    <>
      <InputSample2 />
    </>
  );
}

function App2() {
  const name = "react";
  const style = {
    backgroundColor: "yellow",
    color: "blue",
    fontSize: 30
  };
  return (
    //주석인가?
    <>
      {/*주석인가?*/}
      <div style={style}>{name}</div>
      <div className="box" />
      <Hello name={name} color="blue">
        태그안의 텍스트입니다.
      </Hello>
      <Hello />
      {name}
      <br />
      ms4hat
      <br />
      <Hello2 messages={["메시지1", "메시지2", "메시지3"]} />
      <br />
      <Hello2 isLoggedIn={true} />
    </>
  );
}

export default App;
