import axios from "axios";
import React, { useReducer, useEffect, useState } from "react";
import Movie from "./Movie";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

function MovieList() {
  const [id, setId] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("http://localhost:5000/movieList");
      console.log(response);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      console.log(e.response.status);
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(
    () => {
      // 화면이 마운트 될 때
      fetchData();
    }, // props의 value가 바뀔 때
    []
  );

  const { loading, data: movieList, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!movieList) return null;

  return (
    <>
      <ul>
        {movieList.map(movie => (
          <li
            key={movie.id}
            onClick={() => setId(movie.id)}
            style={{ cursor: "pointer" }}
          >
            {movie.title} ({movie.director}, {movie.year})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>불러오기</button>
      {id && <Movie id={id} />}
    </>
  );
}

export default MovieList;
