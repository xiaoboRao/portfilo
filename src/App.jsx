import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfilo from "./components/portfilo/Portfilo";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";
import Menu from "./components/menu/Menu";
import React, { useState } from "react";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfilo />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
