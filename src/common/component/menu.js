import React from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../../router/router_list";

export default function Menu(props) {
  return (
    <nav id="menu">
      {nav.map((item, index) => {
        return (
          <NavLink
            className="iconfont icon-home"
            to={item.path}
            key={index}
            activeClassName={"active"}
            ontouchEnd={props.menuHide}
          >
            {item.name}
          </NavLink>
        );
      })}
      {/* 
      <NavLink className="iconfont icon-kecheng" to="/course">
        课程安排
      </NavLink>
      <NavLink className="iconfont icon-peixunjianshi" to="/lecturer">
        讲师团队
      </NavLink> */}
    </nav>
  );
}
