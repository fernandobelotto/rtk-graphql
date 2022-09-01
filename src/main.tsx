import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { graphqlApi } from "./api";
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={graphqlApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
