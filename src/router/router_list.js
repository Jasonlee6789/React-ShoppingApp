import React from "react";
import Course from "../view/course/index";
import Index from "../view/index/index";
import Lecturer from "../view/lecturer";
import Login from "../view/login/index";
import Work from "../view/work";

const routerList = [
  {
    name: "首页",
    path: "/",
    exact: true,
    render(props) {
      console.log(props);
      return <Index {...props} />;
    },
  },
  {
    name: "课程安排",
    path: "/course",
    exact: true,
    render(props) {
      console.log(props);
      return <Course {...props} />;
    },
  },
  {
    name: "讲师团队",
    path: "/lecturer",
    exact: true,
    render(props) {
      console.log(props);
      return <Lecturer {...props} />;
    },
  },
  {
    name: "作品详情",
    path: "/work/:id",
    exact: true,
    render(props) {
      console.log(props);
      return <Work {...props} />;
    },
  },
  {
    name: "登陆注册",
    path: "/login",
    exact: true,
    render(props) {
      console.log(props);
      return <Login {...props} />;
    },
  },
];
const nav = [
  {
    name: "首页",
    path: "/",
    exact: true,
    className: "iconfont icon-home",
  },
  {
    name: "课程安排",
    path: "/course",
    exact: true,
    className: "iconfont icon-kecheng",
  },
  {
    name: "讲师团队",
    path: "/lecturer",
    exact: true,
    className: "iconfont icon-peixunjianshi",
  },
];
export default { routerList, nav };
