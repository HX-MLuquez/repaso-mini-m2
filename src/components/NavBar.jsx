import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ logout }) {
  return (
    <div className="nav">
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/form/create">
        <button>Create</button>
      </Link>
      <Link to="/form/edit">
        <button>Edit</button>
      </Link>
      <Link to="/form/delete">
        <button>Delete</button>
      </Link>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}
