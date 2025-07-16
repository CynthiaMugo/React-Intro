import { useState } from "react";


function SimpleState() {
    const state = useState(0);
    let clicked = 0;

    const increment = () => {
        console.log(state);
        let currentState = state[0];
        let newState = currentState + 1;
        state[1](newState);
        //clicked = clicked + 1;
    }                                                                                                                            
    return (
        <div>
            <div>
                <button className="button-style" onClick={increment}>Click Me</button>
            </div>
            <h3>Clicked: {state[0]}</h3>
        </div>
    );
}
export default SimpleState;