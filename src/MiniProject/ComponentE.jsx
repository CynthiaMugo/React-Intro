function ComponentE() {
    return (
        <div className="border-container" style={{
            width: "40%",
            margin: "10px",
            padding: "20px"

        }}>
            <Card text1="+254" text2="Some text" />
            <Card text1="+254" text2="Some text" />
        </div>
    );
}

    function Card(props) {
        const {text1, text2} = props;
        return (
            <div style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                padding: "20px",
                borderRadius: "15px",
                margin: "20px"
            }}>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        );
    }

export default ComponentE;