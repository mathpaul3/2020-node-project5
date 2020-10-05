import React, { useContext, useRef } from "react";
import { MusicContext } from "./MusicReducerApp";

function CreateMusic({ title, singer }) {
  const dispatch = useContext(MusicContext);

  const onChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value
    });
  };

  // nextId.current = 4
  const nextId = useRef(4); // 서버 메모리에 저장
  // const nextId = 4; 렌더링 할 때마다 4로 갱신

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
