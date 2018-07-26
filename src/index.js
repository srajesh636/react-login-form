import React from "react";
import ReactDOM from "react-dom";
import LoginBasePage from "./Pages/LoginBasePage";

const Index = () => {
  return (
    <div>
      <LoginBasePage />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
