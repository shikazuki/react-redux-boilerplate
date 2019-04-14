import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "./Router";
import { configureStore } from "./store/configureStore";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
