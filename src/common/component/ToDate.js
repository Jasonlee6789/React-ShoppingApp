import React from "react";

function ToDate(props) {
  let { time } = props;
  let nowtime = Date.now();
  let newtime = new Date(time).getTime();
  let disTime = nowtime - newtime;
  console.log(newtime);
  //1分钟内显示刚刚
  if (disTime < 60000) {
    return "刚刚";
    //1小时内显示n分钟之前
  } else if (disTime < 3600000) {
    return parseInt(disTime / 60000) + "分钟之前";
  } else if (disTime < 86400000) {
    return parseInt(disTime / 3600000) + "小时之前";
  } else if (disTime < 604800000) {
    return parseInt(disTime / 86400000) + "天之前";
  }

  return time;
}

export default ToDate;
