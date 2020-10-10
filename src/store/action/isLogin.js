import HTTP from "./http";
export default function isLogin(data) {
  return function (dispatch) {
    return HTTP.post("/user/isLogin").then((res) => {
      console.log(res.data.code);
      if (res.data.code) {
        dispatch({
          type: "LOGIN",
          user: res.data.user,
        });
      }
    });
  };
}
