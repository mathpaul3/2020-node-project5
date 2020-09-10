import React from "react";
import PropTypes from "prop-types";

function Hello2({ messages = [], isLoggedIn }) {
  return (
    <>
      <div>
        {messages.length > 0 && messages.length + "건의 메시지가 있습니다."}
      </div>
      <div>{isLoggedIn && "로그인 되었습니다."}</div>
    </>
  );
}

Hello2.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Hello2;
