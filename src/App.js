import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./common/component/menu";
import Header from "./common/component/header";
import "./common/css/reset.css";
import "./common/css/common.css";
import IndexRoute from "./router";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function changeShow() {
    setShowMenu(!showMenu);
  }
  function menuHide() {
    setShowMenu(false);
  }
  return (
    <BrowserRouter>
      <div>
        <Header changeShow={changeShow} />
        <Menu menuHide={menuHide} />
        <div
          className="pageWrap"
          style={{
            transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
          }}
          onTouchStart={() => {
            menuHide();
          }}
        >
          {/* <Frame> */}
          <IndexRoute menuHide={menuHide} showMenu={showMenu} />
          {/* </Frame> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
