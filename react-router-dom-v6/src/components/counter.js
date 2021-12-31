import { useState } from "react";
import "./styles";

export default function Counter() {
  let [amount, setAmount] = useState(0);
  function handleClickAdd() {
    console.log(`Add: ${amount}`);
    let value = amount++;
    setAmount(value);
    console.log(`Add: ${amount}`);
  }
  function handleClickSub() {
    console.log(`Sub: ${amount}`);
    if (amount > 0) {
      let value = amount--;
      setAmount(value);
    }
  }

  return (
    <div>
      <div>{amount}</div>
      <button onClick={handleClickSub}>-</button>
      <button onClick={handleClickAdd}>+</button>
    </div>
  );
}
