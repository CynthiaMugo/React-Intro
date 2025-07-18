function Navigation(props) {
  const { setPage, page } = props;

  const getclass = (tocheck) => {
    if (page === tocheck) {
      return "btn-primary";
    }

    return "btn-secondary";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100px" }}>
      <button
        onClick={() => setPage("home")}
        className={`btn ${getclass("home")} m-1`}
      >
        Home
      </button>
      <button
        onClick={() => setPage("about")}
        className={`btn ${getclass("about")} m-1`}
      >
        About
      </button>
      <button
        onClick={() => setPage("contact")}
        className={`btn ${getclass("contact")} m-1`}
      >
        Contact
      </button>
    </div>
  );
}

export default Navigation;