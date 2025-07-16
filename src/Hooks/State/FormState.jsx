import React, { useState } from 'react';

function FormState() {
    //usestate
    const [radius, setRadius] = useState(0);
    function areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }
    const updateRadiusValue = (e) => {
        //console.log(e.target.value);
        setRadius(e.target.value);
    }
    return (
        <div>
            <div>
                <h2><label>Circle Value</label></h2>
                <p><input onChange={updateRadiusValue} type="number" className='input-style'/></p>
            </div>
            <div>
                For a circle with radius: <b>{radius}</b> Area is {" "}
                <b>{areaOfCircle(radius)}</b>
            </div>
            <Circle radius={radius}/>
        </div>
    );
}

function Circle(props) {
    const { radius } = props;

    const getSize = (radius) => {
        let r = parseInt(radius);
        return `${2 * r}px`;
    }
    const getTextSize = (radius) => {
    if (parseInt(radius) < 3) {
      return "1px";
    }
    if (parseInt(radius) < 10) {
      return "2px";
    }

    if (parseInt(radius) < 20) {
      return "5px";
    }

    return "";
  };

    return (
        <div style={{ 
                width: getSize(radius),
                height: getSize(radius),
                borderRadius: "2000px", 
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

        }}>
            <span style={{ fontSize: getTextSize(radius) }}>
                r={parseInt(radius)}
      </span>
        </div>
    );

}
export default FormState;