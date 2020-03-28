import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./store";
import { CounterContainer } from "./containers/counter";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/count" exact>
          <CounterContainer />
        </Route>
          <Route path="/">
              <App />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
