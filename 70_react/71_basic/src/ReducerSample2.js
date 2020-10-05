import React, { useReducer, useState, useRef } from "react";

const initialState = {
  id: "",
  name: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value
      };
    case "RESET":
      return initialState;
    default:
      throw new Error("Unhandled action");
  }
}

function ReducerSample2() {
  const [student, dispatch] = useReducer(reducer, initialState);

  // inputId = {current: }
  const inputId = useRef(); // ref 객체
  const inputName = useRef();

  const onChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value
    });
  };
  const onReset = () => {
    dispatch({
      type: "RESET"
    });
    // // inputId.current = input DOM
    // inputId.current.focus();
    inputName.current.focus();
  };

  return (
    <>
      <input
        name="id"
        placeholder="학번"
        onChange={onChange}
        value={student.id}
        ref={inputId}
      />
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={student.name}
        ref={inputName}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        학번 : {student.id}
        <br />
        이름 : {student.name}
      </div>
    </>
  );
}
export default ReducerSample2;
