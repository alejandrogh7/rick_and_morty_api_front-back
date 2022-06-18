import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
  return async (dispatch) => {
    const json = await axios.get("http://localhost:3001/characters/");
    return dispatch({
      type: GET_CHARACTERS,
      payload: json.data,
    });
  };
};
