import React, { useState } from 'react';

function FormState() {
    //usestate
    const [radius, setRadius] = useState(0);
    function areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }
    const updateRadiusValue = (e) => {
        //console.log(e);
        setRadius(e.target.value);
    }
    return (
        <div>
            <div>
                <h2><label>Circle Value</label></h2>
                <p><input onChange={updateRadiusValue} type="number" className='input-style'/></p>
            </div>
            <div>
                For a cicle with radius <b>{radius}</b> Area is {" "}
                <b>{areaOfCircle(radius)}</b>
            </div>
        </div>
    );
}
export default FormState;