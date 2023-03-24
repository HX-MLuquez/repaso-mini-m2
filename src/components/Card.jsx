import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

export default function Card({ character }) {
  let id = 1;
  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p>{character.edad}</p>
      <p>{character.fuerza}</p>
      <img src={character?.img}></img>
    </div>
  );
}

/*
  name: "",
    edad: "",
    fuerza: "",
    img: ""
<Link to={`detail/${id}`}>
</Link>
*/
