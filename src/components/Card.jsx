import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ character }) {
  let id = character.id;
  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <h2>{character.name}</h2>
        <p>Age: {character.age}</p>
        <p>Force: {character.force}</p>
        <img src={character?.img}></img>
      </Link>
    </div>
  );
}

/*
  name: "",
    age: "",
    force: "",
    img: ""
<Link to={`detail/${id}`}>
</Link>
*/
