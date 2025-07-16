function Buttons() {
    const printDate = () => {
        let date = new Date();
        console.log(date);
    };
    const clicked = (e) => {
        console.log("Button Clicked")
        console.log(e);
    };
    function alertDate() {
        let date = new Date;
        console.log(date);
        alert(date);
    }
    //In callback function
    // const alertDate = () => {
    //     let date = new Date();
    //     console.log(date);
    //     alert(date);
    // };
    function mouseIn() {
        console.log("Mouse is here");
    }
    return (
        <div>
            <p>
                <button onClick={clicked} onMouseEnter={mouseIn} className="button-style">Click Me</button>
            </p>
            <p>
                <button onClick={printDate} className="button-style">Print Date</button>
            </p>
            <p>
                <button onClick={alertDate} className="button-style">Alert Date</button>
            </p>
        </div>
    );
}
export default Buttons;