import React from "react";
import ReactDOM from "react-dom";
import Video from "./vid.js";
import ContextTest from "./test";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ContextTest />
      <Video videoUrl="rtmp://89.22.237.112:1935/@beinlive24/@beinlive24.stream" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
