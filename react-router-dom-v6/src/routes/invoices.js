import { Link } from "react-router-dom";
import { getInvoices } from "../data";
import "../globalStyle.css";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <>
      <header>
        <h2>Invoices</h2>
        <nav className="navs-style">
          {invoices.map((invoice) => (
            <Link
              className="links-style"
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </Link>
          ))}
        </nav>
      </header>
      <main></main>
    </>
  );
}
