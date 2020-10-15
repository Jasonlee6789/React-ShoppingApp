import React, { useEffect, useMemo, useState } from "react";
import "../../common/css/miiaov.css";
import { connect } from "react-redux";
import Frame from "../../common//component/frame";
import Skeleton from "../../common//component/skeleton";
import getWork from "../../store/action/getWorks";
import Main from "./main";
import getMessageList from "../../store/action/getMessageList";
import Message from "./message";
import { withRouter } from "react-router-dom";

function Work(props) {
  console.log(props);

  let { data, loading, dispatch, match, user, history } = props;
  console.log(data, loading);

  let { id } = match.params;

  let [showMessage, setShow] = useState(false);

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
      dispatch({
        type: "MESSAGE_RESET",
      });
    };
  }, []);

  return (
    <div>
      <Frame pullUp={true} getData={getMessageData}>
        {loading ? <Skeleton /> : <Main data={data} />}
      </Frame>
      <footer
        class="miiapv_footer"
        onClick={() => {
          if (user) {
            setShow(true);
          } else {
            history.push("/login");
          }
        }}
      >
        回复本贴
      </footer>
      <Message show={showMessage} setShow={setShow} id={id} />
    </div>
  );
}

export default withRouter(
  connect((state) => ({
    ...state.Work,
    user: state.getUser,
  }))(Work)
);
