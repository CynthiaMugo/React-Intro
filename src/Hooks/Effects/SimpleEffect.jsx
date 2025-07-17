import { useEffect } from 'react';
function SimpleEffect() {

    // useEffect(function, [dependency array])
    //useEffect(function) - without dependency
    // useEffect(function,[])-> it will run only once
    // useEffect(function,[radius])-> initially when component is mounte and when radius

        useEffect(() => {
            console.log("Useefect has run");
        });
    return (
        <div>
            <h2>Simple Effect</h2>
        </div>
    );
}
export default SimpleEffect;