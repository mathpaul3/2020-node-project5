import React, { useRef, useState } from "react";
import Hello from "./Hello";
import Hello2 from "./Hello2";
import "./App.css";
import StateSample from "./StateSample";
import StateSample2 from "./StateSample2";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";
import MusicList from "./MusicList";
import MovieList from "./MovieList";
import CreateMusic from "./CreateMusic";
import CreateMovie from "./CreateMovie";

// 함수형 컴포넌트
// return (JSX)
function App() {
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
