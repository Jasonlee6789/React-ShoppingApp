import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { routerList } from "./router_list";
function IndexRoute(props) {
  return (
    <Switch>
      {routerList.map((item, index) => {
        return (
          <Route
            path={item.path}
            exact={item.exact}
            render={item.render}
            key={index}
            {...props}
          />
        );
      })}
    </Switch>
  );
}
export default IndexRoute;
