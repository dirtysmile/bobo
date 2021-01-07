import React from "react";
import { Link, Route } from "react-router-dom";
import Board from "./Board";
import Dashboard from "./Dashboard";
import "./App.scss";
import Setting from "./Setting";

const App = () => {
  return (
    <div>
      <div className="top">
        <div className="logo">logo</div>
        <div className="topmenu">
          <div>
            <Link to="/">대시보드</Link>
          </div>
          <div>
            <Link to="/board">게시판</Link>
          </div>
          <div>
            <Link to="/setting">설정</Link>
          </div>
        </div>
      </div>
      <div className="middle">
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/board" component={Board} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;
