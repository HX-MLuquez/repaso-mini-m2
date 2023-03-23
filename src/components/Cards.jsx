import React from "react";
import Card from "./Card";
import './Cards.css'

export default function Cards({ characters }) {
  return (
    <div className="cards">
      {characters && characters.map((ch, index) => <Card key={index} character={ch}></Card>)}
    </div>
  );
}
