import HTTP from "./http";
export default function getWork(id) {
  return function (dispatch) {
    dispatch({
      type: "WORK_LOAD",
    });
    return HTTP.post(`/lecturer/info`, {
      article_id: id,
    }).then((res) => {
      console.log(res);
      dispatch({
        type: "WORK_LOADOVER",
        data: res.data,
      });
    });
  };
}
