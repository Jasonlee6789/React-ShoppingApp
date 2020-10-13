import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getGood, setGood, cancelGood } from "../../store/action/good";

function Good(props) {
  let { goodNub, good, goodId, user, dispatch, id, history } = props;
  console.log(props);
  let point = {};
  useEffect(() => {
    dispatch(getGood(id));
  }, [user]);

  return (
    <p className="miaov_zan">
      <span>有{goodNub}人觉得很赞</span>
      <span
        className={"iconfont icon-tuijian1" + (good ? "good" : "")}
        onTouchStart={(e) => {
          let touch = e.changedTouches[0];
          point.x = touch.pageX;
          point.y = touch.pageY;
        }}
        onTouchEnd={(e) => {
          let touch = e.changedTouches[0];
          let nowPoint = {
            x: touch.pageX,
            y: touch.pageY,
          };

          if (
            Math.abs(nowPoint.x - point.x) < 5 &&
            Math.abs(nowPoint.y - point.y) < 5
          ) {
            if (user) {
              if (good) {
                dispatch(cancelGood(id, goodid));
              } else {
                dispatch(setGood(id));
              }
            } else {
              history.push("/login");
            }
          }
        }}
      ></span>
    </p>
  );
}

export default connect((state) => ({
  good: state.good,
  user: state.getUser(),
}))(Good);
