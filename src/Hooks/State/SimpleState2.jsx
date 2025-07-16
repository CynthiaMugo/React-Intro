import { useState } from "react";

function SimpleState2() {
    //destructuring useState hook
  const [currentState, setCurrentState] = useState(0);

  const increment = () => {
    setCurrentState(currentState + 1);
  };
  const decrement = () => {
    let newState = currentState - 1;
    setCurrentState(newState);
  };

  return (
    <div>
      <h1>Simple state 2</h1>
      <button className="button-style" onClick={decrement}>-</button>
      <span style={{padding: "10px"}}>{currentState}</span>
      <button className="button-style" onClick={increment}>+</button>
    </div>
  );
}

export default SimpleState2;