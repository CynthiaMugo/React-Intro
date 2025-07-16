function Form() {

    const getNameValue = (e) => {
        //console.log(e);
        console.log(e.target.value);
    }
    return (
        <div>
            <div>
                <p><label>Name:</label></p>
                <p><input onChange={getNameValue} type="name"  className="input-style" /></p>
            </div>
            <div>
                <p><label>Email:</label></p>
                <p><input onBlur={getNameValue} type="email"  className="input-style" /></p>
            </div>
        </div>
    );
}
export default Form;