import React, { useRef, useState } from "react";
import MusicList from "./MusicList";
import CreateMusic from "./CreateMusic";

function MusicStateApp() {
  const [music, setMusic] = useState({
    title: "",
    singer: "",
    active: false
  });

  const { title, singer } = music;

  const [musicList, setMusicList] = useState([
    { id: 1, singer: "아이유", title: "eight", active: false },
    { id: 2, singer: "폴킴", title: "Hero", active: false },
    { id: 3, singer: "장범준", title: "실버판테온", active: false }
  ]);

  const onChange = e => {
    const { name, value } = e.target;
    setMusic({
      ...music,
      [name]: value // e.target.name -> title,
    });
  };

  // nextId.current = 4
  const nextId = useRef(4); // 서버 메모리에 저장
  // const nextId = 4; 렌더링 할 때마다 4로 갱신

  const onCreate = () => {
    // 배열에 추가
    /*// 1. spread 연산자
    setMusicList([
      ...musicList,
      {
        id: nextId.current,
        title, // ...music
        singer
      }
    ]);*/

    // 2. concat() 함수
    setMusicList(
      musicList.concat({
        id: nextId.current,
        ...music
      })
    );

    nextId.current += 1;
    setMusic({
      title: "",
      singer: "",
      active: false
    });
  };

  const onRemove = id => {
    setMusicList(musicList.filter(music => music.id !== id));
  };

  const onToggle = id => {
    setMusicList(
      musicList.map(music =>
        music.id === id ? { ...music, active: !music.active } : music
      )
    );
  };

  return (
    <>
      <CreateMusic
        title={title}
        singer={singer}
        onChange={onChange}
        onCreate={onCreate}
      />
      <MusicList
        musicList={musicList}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default MusicStateApp;
