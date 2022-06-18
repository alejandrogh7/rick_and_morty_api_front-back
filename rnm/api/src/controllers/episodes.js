const { Episode } = require("../models/index.js");
const ModelCrud = require("./index.js");

const episodeController = new ModelCrud(Episode);

module.exports = episodeController;
