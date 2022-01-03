import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function Counter({ expenseId, price, getCounter }) {
  const [counter, setCounter] = useState(0);
  const firstUpdate = useRef(true);

  function handleClickAdd() {
    setCounter(counter + 1);
  }

  function handleClickSub() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function handleChange(event) {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setCounter(value);
    }
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    getCounter(expenseId, price, counter);
  });

  return (
    <>
      <input
        className="counter-input"
        value={counter}
        onChange={(event) => handleChange(event)}
      />
      <button
        className="counter-button"
        type="button"
        onClick={() => handleClickSub()}
      >
        -
      </button>
      <button
        className="counter-button"
        type="button"
        onClick={() => handleClickAdd()}
      >
        +
      </button>
    </>
  );
}
