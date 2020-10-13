import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import getWorks from "../../store/action/getWorks";
import Tab from "../../common/components/tab";
import "../../common/css/index.css";
import Course from "./course";
import Vip from "./vip";
import Miaov from "./miaov";
import Works from "./works";
import Frame from "../../common/component/frame";

let imgData = [
  require("../../common/images/tab/img1.png"),
  require("../../common/images/tab/img2.png"),
  require("../../common/images/tab/img3.png"),
  require("../../common/images/tab/img4.png"),
];
function Index(props) {
  const [page, setPage] = useState(1);
  let { dispatch } = props;
  console.log(props);

  function getWorksData() {
    // dispatch(getWorks(page)).then((res) => {
    //   console.log(res);
    // });
    let p = dispatch(getWorks(page));
    // setPage(++page);
    return p;
  }

  useEffect(() => {
    getWorksData();
  }, []);

  return (
    <Frame pullUp={true} getData={getWorksData}>
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
        <section className="index_content">
          <Course />
          <Vip />
          <Miaov />
          <Works {...props} />
        </section>
      </div>
    </Frame>
  );
}

export default connect((props) => ({ ...props.works }))(Index);
