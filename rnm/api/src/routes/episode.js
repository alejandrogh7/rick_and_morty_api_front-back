const { Router } = require("express");
const episodeController = require("../controllers/episodes.js");

const router = Router();

router.get("/:id", episodeController.getById);

router.get("/", episodeController.getAllModels);

router.post("/", episodeController.addModel);

router.put("/:id", episodeController.updateModel);

router.delete("/:id", episodeController.deleteModel);

module.exports = router;
