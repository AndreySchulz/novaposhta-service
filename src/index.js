import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import { persistor, store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="novaposhta-service">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
