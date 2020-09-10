import React from "react";
import PropTypes from "prop-types";

// const props = {name: "홍길동", color: "blue", children: ""}
function Hello({ name, color = "black", children = "내용없음" }) {
  name = "아무개";
  return (
    <>
      <div style={{ color }}>안녕하세요, {name || "이름없음"}님</div>
      <div>{children}</div>
    </>
  );
}

Hello.defaultProps = {
  color: "black",
  children: "내용없음"
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.string
};
export default Hello;
