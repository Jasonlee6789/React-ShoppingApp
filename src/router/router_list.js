import React from "react";
import Course from "../view/course";
import Index from "../view/index/index";
const routerList = [
  {
    name: "首页",
    path: "/",
    exact: true,
    render() {
      return <Index />;
    },
  },
  {
    name: "课程安排",
    path: "/course",
    exact: true,
    render() {
      return <Course />;
    },
  },
];

export default routerList;
