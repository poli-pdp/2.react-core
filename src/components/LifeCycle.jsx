import { useState } from "react";
console.log("Pre-Render");

const LifeCycle = () => {
  console.log("Logic-Render");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <div>
      {console.log("Return-Render")}
      <h2>LifeCycle</h2>
      <h4>Counter 1 : {counter1}</h4>
      <h4>Counter 2 : {counter2}</h4>
      <button onClick={() => setCounter1(counter1 + 1)}>Counter 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Counter 2</button>
    </div>
  );
};

export default LifeCycle;
