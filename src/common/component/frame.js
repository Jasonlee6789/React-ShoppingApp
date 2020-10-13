import React, { useState, useEffect, useRef } from "react";
import { useInnerHeight } from "../hook/index";
import BScroll from "better-scroll";
import Menu from "./menu";
import Header from "./header";
import "../css/reset.css";
import "../css/common.css";

export default function Frame(props) {
  console.log(props);
  const [showMenu, setShowMenu] = useState(false);
  const innerH = useInnerHeight();
  const wrap = useRef(null);
  let pageScroll = null;

  let { pullUp, getData, bounce } = props;
  function changeShow() {
    setShowMenu(!showMenu);
  }
  function menuHide() {
    setShowMenu(false);
  }
  useEffect(() => {
    pageScroll = new BScroll(wrap.current, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        className: /(^|\s)work_a(\s|$)/,
      },
      pullUpload: pullUp ? { threshold: 200 } : false,
      bounce,
    });
    pageScroll.on("pullingUp", () => {
      // console.log("上滑加载更多");
      getData().then((res) => {
        console.log(res);
        if (res) {
          pageScroll.finishPullUp();
          pageScroll.refresh();
        } else {
          pageScroll.closePullUp();
        }
      });
    });
  }, []);
  return (
    <div>
      <Header changeShow={changeShow} />
      <Menu />
      <div
        id="main"
        style={{
          transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
          height: innerH,
        }}
        ref={wrap}
        onTouchStart={() => {
          menuHide();
        }}
      >
        <div> {props.children}</div>
      </div>
    </div>
  );
}
