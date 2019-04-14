import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import App from "./App";
import Counter from "./containers/Counter";
import "./Router.css";

export const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className="Router_nav-links">
          <div className="Router_link">
            <Link to="/">Home</Link>
          </div>
          <div className="Router_link">
            <Link to="/counter/">Counter</Link>
          </div>
        </div>
      </nav>

      <Route path="/" exact component={App} />
      <Route path="/counter/" component={Counter} />
    </BrowserRouter>
  );
};
