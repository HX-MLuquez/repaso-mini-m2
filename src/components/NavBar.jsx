import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar({logout, deleteChar}) {
  const [char,setChar]= useState("")
  function handleChange(e){
    setChar(e.target.value)
  }

  return (
    <div className="nav">
      <Link to="/home">
        <button>Home</button>
      </Link>
      {/* "/form/:type" */}
      <Link to="/form/create">
        <button>Create</button>
      </Link>
      <Link to="/form/edit">
        <button>Edit</button>
      </Link>
        <input name="deleteChar" value={char} onChange={handleChange}></input>
        <button onClick={()=> deleteChar(char)}>Delete</button>
        <button onClick={logout}>LogOut</button>
    </div>
  );
}
/*
 params {
    type: create,
    id: undefined
  }
*/
