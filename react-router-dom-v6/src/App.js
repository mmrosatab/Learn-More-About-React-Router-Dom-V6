import React from "react";
import { Link, Outlet } from "react-router-dom";
import "normalize.css";
import "./globalStyle.css";

function App() {
  return (
    <div>
      <header>
        <h1>React Router DOM V6</h1>
        <nav className="navs-style">
          <Link className="links-style" to="/invoices">
            Invoices
          </Link>

          <Link className="links-style" to="/expenses">
            Expenses
          </Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
