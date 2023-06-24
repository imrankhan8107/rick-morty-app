import React, { useEffect } from "react";
import {
  getCharacters,
  nextPage,
  prevPage,
  setGender,
  setStatus,
  setName,
} from "../store/character";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import "../styles/characters.css";

export default function Characters() {
  const dispatch = useDispatch();
  const { characters, page, gender, character_status, name } = useSelector(
    (state) => state.charactersStore
  );
  useEffect(() => {
    dispatch(getCharacters({ page, gender, character_status, name }));
  }, [dispatch, gender, page, character_status, name]);
  console.log(characters);

  const handleGenderChange = (event) => {
    dispatch(setGender(event.target.value));
  };

  const handleStatusChange = (event) => {
    dispatch(setStatus(event.target.value));
  };
  const handleNameChange = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      dispatch(setName(event.target.value));
    }
  };
  return (
    <div className="characters-page">
      <div>
        <input
          type="text"
          placeholder="Search by name"
          onKeyDown={handleNameChange}
        />
        <select value={character_status} onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="characters">
        {characters.map((character) => {
          // frontend filtering
          // if (Status !== "all" && Gender !== "all") {
          //   return (
          //     character.status === Status &&
          //     character.gender === Gender && (
          //       <Card key={character.id} character={character} />
          //     )
          //   );
          // } else if (Status !== "all") {
          //   return (
          //     character.status === Status && (
          //       <Card key={character.id} character={character} />
          //     )
          //   );
          // } else if (Gender !== "all") {
          //   return (
          //     character.gender === Gender && (
          //       <Card key={character.id} character={character} />
          //     )
          //   );
          // } else {
          //   return <Card key={character.id} character={character} />;
          // }
          return <Card key={character.id} character={character} />;
        })}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(nextPage());
          }}
        >
          Next Page
        </button>
        {page}
        <button
          onClick={() => {
            dispatch(prevPage());
          }}
        >
          Previous Page
        </button>
      </div>
    </div>
  );
}
