import React, { useEffect, useMemo } from "react";
import "../../common/css/miaov.css";
import { connect } from "react-redux";
import Frame from "../../common//component/frame";
import Skeleton from "../../common//component/Skeleton";
import getWork from "../../store/action/getWorks";
import Main from "./main";
import getMessageList from "../../store/action/getMessageList";

function Work(props) {
  console.log(props);

  let { data, loading, dispatch, match } = props;
  console.log(data, loading);

  let { id } = match.params;
  function getMessageData() {
    let p = dispatch(getMessageList(id));
    return p;
  }
  useEffect(() => {
    dispatch(getWork(id));
    getMessageData();
    return () => {
      dispatch({
        type: "WORK_RESET",
      });
    };
  }, []);
  return (
    <div>
      <Frame pullUp={true} getData={getWorksData}>
        {loading ? <Skeleton /> : <Main data={data} />}
      </Frame>
      <footer class="miiapv_footer">回复本贴</footer>
    </div>
  );
}

export default connect((state) => ({ ...state.Work }))(Work);
