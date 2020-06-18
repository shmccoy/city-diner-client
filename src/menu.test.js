import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";

import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
