import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const sanjaiyan_enchanto_root = ReactDOM.createRoot(
  document.getElementById("root")
);

React.startTransition(() => {
  sanjaiyan_enchanto_root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
