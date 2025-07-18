import React, { useState } from "react";
import About from "./About";
import Navigation from "./Navigation";
import Home from "./Home";
import Contact from "./Contact";

function ManualRoute() {
    const [page, setPage] = useState("home");

  return (
    <div style={{ display: "flex" }}>
      <Navigation page={page} setPage={setPage}/>
      <div style={{ flex: 1 }} className="m-2">
        <Home page={page} setPage={setPage}/>
        <About page={page} setPage={setPage}/>
        <Contact page={page} setPage={setPage}/>
      </div>
    </div>
  );
}

export default ManualRoute;