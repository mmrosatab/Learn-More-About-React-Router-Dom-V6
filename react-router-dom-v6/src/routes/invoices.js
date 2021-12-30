import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import "../globalStyle.css";
import { getInvoices } from "../data";
import { useState } from "react";

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
    <>
      <section>
        <h2>Invoices</h2>
        <nav className="navs-style">
          <input
            value={inputValue || ""}
            onChange={(event) => handleChange(event)}
          />
          {invoices
            .filter((invoice) => searchInvoice(invoice))
            .map((invoice) => (
              <NavLink
                className="links-style"
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            ))}
        </nav>
        <button onClick={() => handleClick()}>Search</button>
        <Outlet />
      </section>
    </>
  );
}
