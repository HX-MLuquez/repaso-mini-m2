import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/form">
        <button>Create</button>
      </Link>
    </div>
  );
}
