import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCharacters } from "../../store/actions/index.js";

const CharacterCard = ({ characters, getCharacters }) => {
  //   const [characters, setCharacters] = useState([]);

  //   const getCharacters = async () => {
  //     const char = await axios.get("http://localhost:3001/characters/");
  //     return setCharacters(char.data);
  //   };

  //   useEffect(() => {
  //     getCharacters();
  //   }, []);

  const getAll = async () => {
    return await getCharacters();
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      {characters &&
        characters.map((character) => {
          return (
            <div>
              <img src={character.image} alt={character.name} width="300px" />
              <h1>{character.name}</h1>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: (character) => {
      dispatch(getCharacters(character));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);
