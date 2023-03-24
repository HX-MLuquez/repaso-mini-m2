import React from "react";
import About from "./About";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h1>CM</h1>
      <About></About>
      <p>Tel: 000 111 222</p>
      <a href="https://github.com/HX-mluquez">GitHub</a>
      <a href="https://www.npmjs.com/~mauricio776101">NPM</a>
    </div>
  );
}
