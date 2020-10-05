import react, { useState } from "react";
import MovieList from "./MovieList";
import CreateMovie from "./CreateMovie";

function MovieStateApp() {
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

export default MovieStateApp;
