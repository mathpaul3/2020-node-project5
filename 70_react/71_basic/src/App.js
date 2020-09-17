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
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    year: "",
    active: false
  });

  const { title, director, year } = movie;

  const [movieList, setMovieList] = useState([
    {
      id: 1,
      title: "스타워즈",
      director: "조지 루카스",
      year: "1977",
      active: false
    },
    {
      id: 2,
      title: "아바타",
      director: "제임스 카메론",
      year: "2009",
      active: false
    },
    {
      id: 3,
      title: "인터스텔라",
      director: "크리스토퍼 놀란",
      year: "2014",
      active: false
    }
  ]);

  const onChange = e => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value // e.target.name -> title,
    });
  };

  // nextId.current = 4
  const nextId = useRef(4); // 서버 메모리에 저장
  // const nextId = 4; 렌더링 할 때마다 4로 갱신

  const onCreate = () => {
    setMovieList(
      movieList.concat({
        id: nextId.current,
        ...movie
      })
    );

    nextId.current += 1;
    setMovie({
      title: "",
      director: "",
      year: "",
      active: false
    });
  };

  const onRemove = id => {
    setMovieList(movieList.filter(movie => movie.id !== id));
  };

  const onToggle = id => {
    setMovieList(
      movieList.map(movie =>
        movie.id === id ? { ...movie, active: !movie.active } : movie
      )
    );
  };

  return (
    <>
      <CreateMovie
        title={title}
        director={director}
        year={year}
        onChange={onChange}
        onCreate={onCreate}
      />
      <MovieList
        movieList={movieList}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

function App2() {
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

function App3() {
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

export default App;
