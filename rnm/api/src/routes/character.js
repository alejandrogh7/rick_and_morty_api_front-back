const { Router } = require("express");

// const {
//   getAllCharacters,
//   getById,
//   addCharacter,
//   updateCharacter,
//   deleteCharacter,
// } = require("../controllers/characters.js");

const characterController = require("../controllers/characters.js");
const router = Router();

router.get("/:id", characterController.getById);

router.get("/", characterController.getAllModels);

router.post("/:charId/:episId", characterController.addEpisodeToCharacter);

router.post("/", characterController.addModel);

router.put("/:id", characterController.updateModel);

router.delete("/:id", characterController.deleteModel);

module.exports = router;
