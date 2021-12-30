import React from "react";
import { Link, Outlet } from "react-router-dom";
import "normalize.css";
import "./globalStyle.css";

function App() {
  return (
    <section>
      <header>
        <nav>
          <Link className="links" to="/invoices">
            Invoices
          </Link>

          <Link className="links" to="/expenses">
            Expenses
          </Link>
        </nav>
      </header>
      <Outlet />
    </section>
  );
}

export default App;
