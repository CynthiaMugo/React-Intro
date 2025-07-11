function ArrayData() {
    return (
    <div>
    {/* <ShowColors/> */}
    <CardData/>
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

function CardData() {
    const data = [
    {
      name: "Dress 1",
      img: "https://m.media-amazon.com/images/I/716H7P4ga3L._AC_SY741_.jpg",
      price: 300,
    },
    {
      name: "Dress 2",
      img: "https://m.media-amazon.com/images/I/71nS6-2+oHL._AC_UL480_FMwebp_QL65_.jpg",
      price: 500,
    },
    {
      name: "Dress 1",
      img: "https://m.media-amazon.com/images/I/716H7P4ga3L._AC_SY741_.jpg",
      price: 300,
    },
    {
      name: "Dress 2",
      img: "https://m.media-amazon.com/images/I/71nS6-2+oHL._AC_UL480_FMwebp_QL65_.jpg",
      price: 500,
    },
  ];
  return (
    <div>
        {data.map((dress, index) => {
            return (
                <div key={index}>
                <div>
                    <img src={dress.img} style={{ height: "300px" }}/>
                </div>
                <div>
                    <h4>{dress.name} <b>{dress.price}</b></h4>
                </div>
                </div>
            )
        })}
    </div>
    )
}
export default ArrayData;