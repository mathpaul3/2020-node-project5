import React, { useContext, useRef } from "react";
import { MovieContext } from "./MovieReducerApp";

function CreateMovie({ title, director, year }) {
  const dispatch = useContext(MovieContext);

  const onChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: "CREATE",
      id: nextId.current
    });
    nextId.current += 1;
  };

  return (
    <>
      <input
        name="title"
        placeholder="영화제목"
        onChange={onChange}
        value={title}
      ></input>
      <input
        name="director"
        placeholder="감독 이름"
        onChange={onChange}
        value={director}
      ></input>
      <input
        name="year"
        placeholder="개봉 년도"
        onChange={onChange}
        value={year}
      ></input>
      <button onClick={onCreate}>등록</button>
    </>
  );
}
export default CreateMovie;
