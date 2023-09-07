import { useState } from "react";
import Button from "./Button";

const Views = () => {
  let [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("Hola Mundo");

  return <Button setAmount={setAmount} amount={amount} title="Me gusta" />;
};

export default Views;
