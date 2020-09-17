import React from "react";

function CreateMusic({ title, singer, onChange, onCreate }) {
  return (
    <>
      <input
        name="title"
        placeholder="노래제목"
        onChange={onChange}
        value={title}
      ></input>
      <input
        name="singer"
        placeholder="가수명"
        onChange={onChange}
        value={singer}
      ></input>
      <button onClick={onCreate}>등록</button>
    </>
  );
}
export default CreateMusic;
