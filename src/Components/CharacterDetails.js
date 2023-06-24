import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "../styles/characterdetails.css";

export default function CharacterDetails() {
  const { id } = useParams();
  const character = useSelector((state) =>
    state.charactersStore.characters.find(
      (character) => character.id === parseInt(id)
    )
  );
  return (
    <div className="details-page">
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <h2>Status: {character.status}</h2>
      <h2>Species: {character.species}</h2>
      <h2>gender: {character.gender}</h2>
      <h2>Origin: {character.origin.name}</h2>
      <h2>Location: {character.location.name}</h2>
      <h2>Type: {character.type? character.type:"Unavailable"}</h2>
    </div>
  );
}
