import React from "react";
import ReactDOM from "react-dom";
import Admin from "./admin";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Admin />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
