import { GET_CHARACTERS } from "../actions/index.js";

const initialState = {
  characters: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
