import React from "react";
import ReactDOM from "react-dom";
import { PlayersProvider } from "./components/Context";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <PlayersProvider>
    <App />
  </PlayersProvider>,
  document.getElementById("root")
);
