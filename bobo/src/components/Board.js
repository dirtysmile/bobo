import React from "react";
import { Link, Route } from "react-router-dom";
import "./Board.scss";
import FreeBoard from "./FreeBoard";
import Notice from "./Notice";
import Questions from "./Questions";

const Board = () => {
  return (
    <div className="middle">
      <div className="leftmenu">
        <div>
          <Link to="/board/notice">공지사항</Link>
        </div>
        <div>
          <Link to="/board/freeboard">자유게시판</Link>
        </div>
        <div>
          <Link to="/board/questions">질문게시판</Link>
        </div>
      </div>
      <div className="content">
        <Route
          path={["/board", "/board/notice"]}
          component={Notice}
          exact={true}
        />
        <Route path="/board/freeboard" component={FreeBoard} />
        <Route path="/board/questions" component={Questions} />
      </div>
    </div>
  );
};

export default Board;
