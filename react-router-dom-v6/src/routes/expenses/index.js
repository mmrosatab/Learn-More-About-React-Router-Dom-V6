import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { getExpenses } from "../../data";
import Counter from "../../components/counter";
import "./styles.css";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Expenses() {
  const expenses = getExpenses();
  const [expenseCart, setExpenseCart] = useState([]);

  function handleClick() {}

  function getCounter(id, price, counter) {
    console.log(`id: ${id}`);
    console.log(`Counter: ${counter}`);
    console.log(`Price: ${price}`);
  }

  return (
    <section className="expenses-container">
      <Typography variant="h4" component="div">
        Expenses
      </Typography>

      <List>
        {expenses.map((expense) => (
          <ListItem className="expenses" to={expense.id} key={expense.id}>
            <ListItemText>
              {`Service: ${expense.service} - Price: ${expense.price}`}
            </ListItemText>
            <Counter
              expenseId={expense.id}
              price={expense.price}
              getCounter={getCounter}
            />
          </ListItem>
        ))}
      </List>
      <Button
        className="button-calc"
        variant="contained"
        onClick={() => handleClick()}
      >
        Calculate
      </Button>
      <h2>Total: {}</h2>
    </section>
  );
}
