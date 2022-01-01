import { useState, useEffect } from "react";
import "./styles.css";

export default function Counter() {
  let [amount, setAmount] = useState(0);

  function handleClickAdd() {
    const value = amount + 1;
    setAmount(value);
  }

  function handleClickSub() {
    if (amount > 0) {
      const value = amount - 1;
      setAmount(value);
    }
  }

  function handleChange(event) {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setAmount(value);
    }
  }

  useEffect(() => {}, [amount]);

  return (
    <div className="counter-container">
      <input
        className="counter-input"
        value={amount}
        onChange={(event) => handleChange(event)}
      />
      <button type="button" onClick={() => handleClickSub()}>
        -
      </button>
      <button type="button" onClick={() => handleClickAdd()}>
        +
      </button>
    </div>
  );
}
