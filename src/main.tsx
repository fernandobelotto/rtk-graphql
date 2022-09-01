import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { graphqlApi } from "./api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={graphqlApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
