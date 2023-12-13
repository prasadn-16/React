import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* <div id="Parent">
    <div id="child">
    <h1>I am H1 Tag</h1>
    <h2>I am H1 Tag</h2>
    </div>
    </div> */
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ])
);

const twoSibling = [React.createElement("h1")];
console.log(parent);
root.render(heading);
root.render(parent);
