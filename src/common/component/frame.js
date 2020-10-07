import React from "react";
import Menu from "./menu";
import Header from "./header";

export default function Frame(props) {
  console.log(props);
  return (
    <div>
      <Header />
      <Menu />
      <div id="main">{props.children}</div>
    </div>
  );
}
