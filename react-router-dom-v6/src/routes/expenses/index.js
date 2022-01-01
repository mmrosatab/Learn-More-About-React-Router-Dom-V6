import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { getExpenses } from "../../data";
import Counter from "../../components/counter";
import "./styles.css";

export default function Expenses() {
  const expenses = getExpenses();

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
            <Counter />
          </ListItem>
        ))}
      </List>
    </section>
  );
}
