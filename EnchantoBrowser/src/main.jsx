import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const sanjaiyan_enchanto_root = ReactDOM.createRoot(
  document.getElementById("root")
);

React.startTransition(() => {
  sanjaiyan_enchanto_root.render(
    <React.StrictMode>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </React.StrictMode>
  );
});
