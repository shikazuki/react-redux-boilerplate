import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App/App";
import { Navigation } from "./components/Navigation";
import Counter from "./containers/Counter";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact component={App} />
      <Route path="/counter/" component={Counter} />
    </BrowserRouter>
  );
};
