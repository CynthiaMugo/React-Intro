function ArrayData() {
    return (
    <div>
    <ShowColors/>
    </div>
    )
}

function ShowColors() {
    let colors = ["green", "indigo", "yellow", "black", "red"]

    function singleColor(color, index) {
    return <li key={index}>{color}</li>;
  }

    return (
        <div>
            <h1>These are my favorite colors:</h1>
            <ul>
                {colors.map(singleColor)}
            </ul>
        </div>
    );
}
export default ArrayData;