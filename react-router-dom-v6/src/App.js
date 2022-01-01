import React from "react";
import { Link, Outlet } from "react-router-dom";
import "normalize.css";
import "./styles.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function App() {
  return (
    <section>
      <AppBar>
        <Toolbar className="bar-container">
          <Link variant="h6" className="links" to="/invoices">
            Invoices
          </Link>
          <Link className="links" to="/expenses">
            Expenses
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </section>
  );
}

export default App;
