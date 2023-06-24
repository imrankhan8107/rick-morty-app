import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function CharacterDetails() {
  const { id } = useParams();
  const character = useSelector((state) =>
    state.charactersStore.characters.find(
      (character) => character.id === parseInt(id)
    )
  );
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
}
