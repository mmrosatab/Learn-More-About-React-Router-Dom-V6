import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import "./styles.css";
import { getInvoices } from "../../data";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  let [inputValue, setInputValue] = useState("");

  function handleClick() {
    if (inputValue.length === 0) return true;
    return inputValue.length > 0
      ? setSearchParams({ filter: inputValue })
      : setSearchParams({});
  }

  function handleChange(event) {
    let value = event.target.value;
    if (value.length > 0) {
      setInputValue(value);
    } else {
      setInputValue("");
      setSearchParams({});
    }
  }

  function searchInvoice(invoice) {
    let filter = searchParams.get("filter");
    if (!filter) return true;
    let name = invoice.name.toLowerCase();
    return name.startsWith(filter.toLowerCase());
  }

  return (
    <div className="invoices-container">
      <section className="invoices">
        <Typography variant="h4" component="div">
          Invoices
        </Typography>
        <TextField
          id="outlined-basic"
          label="Search Invoices"
          variant="outlined"
          value={inputValue || ""}
          onChange={(event) => handleChange(event)}
        />
        <Button
          className="button"
          variant="contained"
          onClick={() => handleClick()}
        >
          Search
        </Button>
        <nav className="invoices-nav">
          {invoices
            .filter((invoice) => searchInvoice(invoice))
            .map((invoice) => (
              <NavLink
                className="links"
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            ))}
        </nav>

        <Outlet />
      </section>
    </div>
  );
}
