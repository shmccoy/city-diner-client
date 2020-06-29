import React from "react";
import ReactDOM from "react-dom";
import ItemTable from "./itemtable";

import { BrowserRouter } from "react-router-dom";

let dummyData = [
  { name: "Juice", description: "orange", price: 2.5, category: "Beverages" },
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ItemTable item={dummyData} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
