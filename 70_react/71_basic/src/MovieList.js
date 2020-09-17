import React, { useMemo } from "react";
import Movie2 from "./Movie2";

function Movie({ movie, onRemove, onToggle }) {
  const { id, title, director, year, active } = movie;
  const style = {
    color: active ? "blue" : "black",
    cursor: "pointer"
  };
  return (
    <>
      <div>
        <b
          style={style}
          onClick={() => {
            onToggle(id);
          }}
        >
          {title}
        </b>
        ({director}, {year})<button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </>
  );
}

function MovieList({ movieList, onRemove, onToggle }) {
  const countActiveMovie = () => {
    console.log("Active 개수 세기");
    return movieList.filter(movie => movie.active).length;
  };
  const count = useMemo(countActiveMovie, [movieList]);

  return (
    <>
      {movieList.map(movie => (
        <Movie
          key={movie.id}
          movie={movie}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      <hr />
      <div>Active된 Movie 수 : {count}</div>
    </>
  );
}
export default MovieList;
