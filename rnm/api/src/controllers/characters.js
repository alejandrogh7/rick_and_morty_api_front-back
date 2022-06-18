const { Character, Episode } = require("../models/index.js");
//const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const ModelCrud = require("./index.js");

class CharacterModel extends ModelCrud {
  constructor(model) {
    super(model);
  }

  getAllModels = async (req, res, next) => {
    try {
      const myCharacters = await this.model.findAll({
        include: {
          model: Episode,
          as: "episode",
        },
      });
      const apiCharacters = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
      const allCharacters = apiCharacters.data.results.concat(myCharacters);
      return res.status(200).json(allCharacters);
    } catch (error) {
      next(error);
    }
  };
  addEpisodeToCharacter = async (req, res, next) => {
    const { charId, episId } = req.params;
    try {
      const char = await this.model.findByPk(charId);
      res.status(200).json(await char.addEpisode(episId));
    } catch (error) {
      next(error);
    }
  };
}

const characterController = new CharacterModel(Character);

// const getAllCharacters = async (req, res, next) => {
//   try {
//     return res.status(200).json(await Character.findAll());
//   } catch (error) {
//     next(error);
//   }
// };

// const getById = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     return res.status(200).json(await Character.findByPk(id));
//   } catch (error) {
//     next(error);
//   }
// };

// const addCharacter = async (req, res, next) => {
//   const character = req.body;
//   try {
//     return res.status(201).json(
//       await Character.create({
//         ...character,
//         id: uuidv4(),
//       })
//     );
//   } catch (error) {
//     next(error);
//   }
// };

// const updateCharacter = async (req, res, next) => {
//   const { id } = req.params;
//   const character = req.body;
//   try {
//     await Character.update(character, {
//       where: {
//         id,
//       },
//     });
//     return res.status(200).json("Updated");
//   } catch (error) {
//     next(error);
//   }
// };

// const deleteCharacter = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     await Character.destroy({
//       where: {
//         id,
//       },
//     });
//     return res.status(200).json("Deleted");
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = {
//   getAllCharacters,
//   getById,
//   addCharacter,
//   updateCharacter,
//   deleteCharacter,
// };

module.exports = characterController;
