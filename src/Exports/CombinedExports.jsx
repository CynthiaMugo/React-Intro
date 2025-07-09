function C1() {
    return (
        <div>
            <h1>Combined C1</h1>
        </div>
    )
}

function C2() {
    return (
        <div>
            <h1>Combined C2</h1>
        </div>
    )
}
function MainComponent() {
    return (
        <div>
            <h1>This is the combined main component</h1>
        </div>
    )
}

// export combined 
export { C1, C2};
export default MainComponent;