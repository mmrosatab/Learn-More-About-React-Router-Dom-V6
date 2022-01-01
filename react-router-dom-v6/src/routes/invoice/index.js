import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../../data";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <section className="invoice">
      <Typography variant="body1">Total Due: {invoice.amount}</Typography>
      <Typography variant="body1">
        {invoice.name}: {invoice.number}
      </Typography>
      <Typography variant="body1">Due Date: {invoice.due}</Typography>
      <Typography variant="body1">
        <Button
          className="button"
          variant="contained"
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </Button>
      </Typography>
    </section>
  );
}
