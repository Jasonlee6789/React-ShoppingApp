import React from "react";
import { BrowserRouter } from "react-router-dom";
import IndexRoute from "./router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <IndexRoute />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
