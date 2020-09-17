import React, { useState, useRef } from "react";

function InputSample2() {
  const [student, setStudent] = useState({
    id: "",
    name: ""
  });

  // inputId = {current: }
  const inputId = useRef(); // ref 객체
  const inputName = useRef();

  const onChange = e => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const onReset = () => {
    console.log("reset");
    setStudent({
      id: "",
      name: ""
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
export default InputSample2;
