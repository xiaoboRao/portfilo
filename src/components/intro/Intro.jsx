import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 300,
      backSpeed: 80,
      backDelay: 2000,
      strings: [" End Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img className="img" src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm</h2>
          <h1> Bob</h1>
          <h3>
            Front 
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfilo">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
