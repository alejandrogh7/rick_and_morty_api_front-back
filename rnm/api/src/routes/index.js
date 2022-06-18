//All routes (Charac, Episo)
const { Router } = require("express");
const CharacterRoutes = require("./character.js");
const EpisodeRoutes = require("./episode.js");

const router = Router();

router.use("/characters", CharacterRoutes);
router.use("/episodes", EpisodeRoutes);

module.exports = router;
