import React, { createContext, useContext } from "react";

// 1. Context 생성하기
const MyContext = createContext("아무개");

function Child() {
  // 3. Context값 가져오기
  const text = useContext(MyContext);
  return <div>안녕하세요, {text}님</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  return (
    <MyContext.Provider value="홍길동">
      <GrandParent text="홍길동" />
    </MyContext.Provider>
  );
}

export default ContextSample;
