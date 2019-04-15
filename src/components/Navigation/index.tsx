import * as React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <div className="Navigation_nav-links">
        <div className="Navigation_link">
          <Link to="/">Home</Link>
        </div>
        <div className="Navigation_link">
          <Link to="/counter/">Counter</Link>
        </div>
      </div>
    </nav>
  );
};
