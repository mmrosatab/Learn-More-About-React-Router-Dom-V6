import React from "react";
import { Link, Outlet } from "react-router-dom";
import "normalize.css";
import "./styles.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <section>
      <AppBar>
        <Toolbar className="bar-container">
          <Link
            variant="contained"
            className="links-bar-container"
            to="/invoices"
          >
            <Typography variant="subtitle1" component="div">
              INVOICES
            </Typography>
          </Link>
          <Link
            variant="contained"
            className="links-bar-container"
            to="/expenses"
          >
            <Typography variant="subtitle1" component="div">
              EXPENSES
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </section>
  );
}

export default App;
