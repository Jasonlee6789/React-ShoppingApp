import React from "react";
import { connect } from "react-redux";
// import login from "../../store/action/login";
import Tab from "../../common/components/tab";
import "../../common/css/index.css";

let imgData = [
  require("../../common/images/tab/img1.png"),
  require("../../common/images/tab/img2.png"),
  require("../../common/images/tab/img3.png"),
  require("../../common/images/tab/img4.png"),
];
function Index(props) {
  console.log(props);
  return (
    <div>
      {/* <h1>首页</h1>
      <button
        onClick={() => {
          props.dispatch(login());
        }}
      >
        登录
      </button> */}
      <Tab
        data={imgData}
        render={(data) => {
          return <img src={data} />;
        }}
      />
    </div>
  );
}

export default connect((res) => {
  return res;
})(Index);
