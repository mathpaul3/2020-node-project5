import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      throw new Error("Unhandled action");
  }
}

function reducer2(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function ReducerSample() {
  // [state값, 업데이트함수(Setter)] = useState(초기값);
  const [count, dispatch] = useReducer(reducer, 0);
  const [number, dispatch2] = useReducer(reducer2, 0);

  const counter = () => {
    dispatch({
      type: "ADD"
    });
  };

  const onIncrease = () => {
    dispatch2({
      type: "PLUS"
    });
  };

  const onDecrease = () => {
    dispatch2({
      type: "MINUS"
    });
  };

  return (
    <>
      <div>
        <p>You clicked {count} times.</p>
        <button onClick={counter}>Click Me!</button>
        <h1>{number}</h1>
        <button onClick={onIncrease}>Plus</button>
        <button onClick={onDecrease}>Minus</button>
      </div>
    </>
  );
}

export default ReducerSample;
