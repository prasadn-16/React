import React from "react";
import ReactDOM from "react-dom";

const elem = React.createElement("h1", { id: "element" }, "I am react element");
const elemJSX = <span>Hello this is react Element from JSX</span>;
const HeadingJSX = () => <h2 id="heading">Hello Prasad JSX {elemJSX}</h2>;

const HeadingComponent = () => (
  <div className="container">
    {elem}

    <h1 className="heading">Hi Prasad i came from functional component</h1>
    {HeadingJSX()}
    <HeadingJSX></HeadingJSX>
    <HeadingJSX />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
