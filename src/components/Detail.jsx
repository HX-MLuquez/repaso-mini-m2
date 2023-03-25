import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.css";

export default function Detail({ characters }) {
  const { id } = useParams();
  const character = characters.find((c) => c.id === id);
  return (
    <div className="detail">
      <Link to={`/detail/${id}`}>
        <p>Name: </p>
        <h2>{character.name}</h2>
      </Link>
      <div>
        <p>Age: </p>
        <p>{character.age}</p>
        <p>Force: </p>
        <p>{character.force}</p>
      </div>
      <Link to={`/detail/${id}`}>
        <img src={character?.img}></img>
      </Link>
    </div>
  );
}
