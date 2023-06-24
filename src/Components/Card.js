import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";

export default function Card({ character }) {
  return (
    <Link to={`/${character.id}`}>
      <div className="character-card">
        <img
          src={character.image}
          alt={character.name}
          height="300px"
          width="300px"
        />
        <h2>Name: {character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
      </div>
    </Link>
  );
}
