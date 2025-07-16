import { useState } from "react";


function SimpleState() {
    const state = useState(0);

    const increment = () => {
        console.log(state);
        let currentState = state[0];
        let newState = currentState + 1;
        //state[1](newState);   //use this line or the next one they achieve the same effect
        updateStateFunction(newState)
    }                                                                                                                            
    return (
        <div>
            <h1>Simple state</h1>
            <div>
                <button className="button-style" onClick={increment}>Click Me</button>
            </div>
            <h3>Clicked: {state[0]}</h3>
        </div>
    );
}
export default SimpleState;