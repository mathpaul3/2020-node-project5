import React, { useState } from "react";
import { useAsync } from "react-async";
import Music2 from "./Music2";
import { getMusicList } from "./api";

function MusicList2() {
  const [id, setId] = useState(null);
  
  const { data: musicList, error, isLoading, reload } = useAsync({
    promiseFn: getMusicList
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musicList) return null;
  // return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {musicList.map(music => (
          <li
            key={music.id}
            onClick={() => setId(music.id)}
            style={{ cursor: "pointer" }}
          >
            {music.title} ({music.singer})
          </li>
        ))}
      </ul>
      <button onClick={reload}>불러오기</button>
      {id && <Music2 id={id} />}
    </>
  );
}

export default MusicList2;
