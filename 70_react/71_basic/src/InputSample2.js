import React, { useState } from "react";

function InputSample2() {
  const [student, setStudent] = useState({
    id: "",
    name: ""
  });

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
  };

  return (
    <>
      <input
        name="id"
        placeholder="학번"
        onChange={onChange}
        value={student.id}
      />
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={student.name}
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
