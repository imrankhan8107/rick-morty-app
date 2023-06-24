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
import { Select, Input, Button } from "antd";
const { Option } = Select;

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
        <Input
          type="text"
          placeholder="Search by name"
          onKeyDown={handleNameChange}
        />
        <Select
          value={character_status}
          onChange={handleStatusChange}
          style={{ width: 100 }}
        >
          <Option value="alive">Alive</Option>
          <Option value="dead">Dead</Option>
          <Option value="">All</Option>
          <Option value="unknown">Unknown</Option>
        </Select>
        <Select
          value={gender}
          onChange={handleGenderChange}
          style={{ width: 100 }}
        >
          <Option value="">All</Option>
          <Option value="female">Female</Option>
          <Option value="male">Male</Option>
          <Option value="genderless">Genderless</Option>
          <Option value="unknown">Unknown</Option>
        </Select>
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
      <div className="pagination">
        <Button
          onClick={() => {
            dispatch(nextPage());
          }}
        >
          Next Page
        </Button>
        <span className="page-no">{page}</span>
        <Button
          onClick={() => {
            dispatch(prevPage());
          }}
        >
          Previous Page
        </Button>
      </div>
    </div>
  );
}
