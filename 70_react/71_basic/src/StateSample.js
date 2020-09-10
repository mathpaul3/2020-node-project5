import React, { useState } from "react";

function StateSample() {
  // [state값, 업데이트함수(Setter)] = useState(초기값);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const counter = () => {
    // count = count + 1;   // 값을 직접 변경하면 안됨
    setCount(count + 1); // setter 함수를 통해 변경해야 한다
  };
  const onIncrease = () => {
    // setNumber(number + 1);  // setter로 값 변경
    setNumber(prev => prev + 1); // 업데이트 함수
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const [colorr, setColor] = useState("black");
  const onRed = () => {
    setColor("red");
  };
  const onGreen = () => {
    setColor("green");
  };
  const onBlue = () => {
    setColor("blue");
  };
  return (
    <>
      <div>
        <p>You clicked {count} times.</p>
        <button onClick={counter}>Click Me!</button>
        <p>You clicked {number} times.</p>
        <button onClick={onIncrease}>Plus</button>
        <button onClick={onDecrease}>Minus</button>
        <p style={{ color: colorr }}>색상 바꾸기</p>
        <button onClick={onRed}>Red</button>
        <button onClick={onGreen}>Green</button>
        <button onClick={onBlue}>Blue</button>
      </div>
    </>
  );
}
export default StateSample;
