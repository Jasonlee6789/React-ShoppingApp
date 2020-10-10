import React, { useEffect, useState } from "react";
// import http from "../../store/action/http";
import { Link, withRouter } from "react-router-dom";
import { useBack } from "../hook/index";
import { connect } from "react-redux";
import isLogin from "../../store/action/isLogin";
import logout from "../../store/action/logout";

function Header(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;
  const back = useBack(props.history);
  const { user, changeShow } = props;
  console.log(user);
  const [isBtnShow, setBtnShow] = useState(false);

  useEffect(() => {
    props.dispatch(isLogin());
  }, []);

  function getUser() {
    if (path === "login") {
      return "";
    }
    if (user) {
      return (
        <span className="header-btn-right header-user">
          <span
            className="header-user"
            onClick={() => {
              setBtnShow(!isBtnShow);
            }}
          >
            {user}
          </span>
          <span
            className="header-logout-btn"
            style={{
              display: isBtnShow ? "block" : "none",
            }}
            onClick={() => {
              props.dispatch(logout());
            }}
          >
            退出
          </span>
        </span>
      );
    }
    return <Link className="user" to="/login" />;
  }
  // http
  //   .post("/lecturer/lists?page=1&rows=20", {
  //     order: "asc",
  //     sort: "id",
  //     category_id: 1,
  //     recommend: 1,
  //   })
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  return (
    <header id="header">
      <nav className="menu">
        {props.location.pathname === "/login" ? (
          <a
            className="header-btn-left iconfont icon-back"
            onClick={() => {
              back();
            }}
          ></a>
        ) : (
          <a
            className="header-btn-left iconfont icon-hycaidan"
            onClick={() => {
              changeShow();
            }}
          ></a>
        )}
      </nav>
      <h1 className="logo">miaov.com</h1>
      {getUser()}
      {/* <a className="user"></a> */}
    </header>
  );
}

export default connect((state) => {
  console.log(state);
  return { user: state.getUser };
})(withRouter(Header));
