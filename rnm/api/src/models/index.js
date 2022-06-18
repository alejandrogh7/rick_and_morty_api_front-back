//use the models
const { Sequelize } = require("sequelize");
const CharacterFactory = require("./Character.js");
const EpisodeFactory = require("./Episode.js");
const {
  db_host,
  db_name,
  db_password,
  db_port,
  db_user,
  host,
} = require("../utils/config/index.js");

const sequelize = new Sequelize(
  `postgres://${db_user}:${db_password}@${db_host}/${db_name}`,
  {
    logging: false,
    native: false,
  }
);

const Character = CharacterFactory(sequelize);
const Episode = EpisodeFactory(sequelize);

//relactions

Character.belongsToMany(Episode, {
  through: "character_episode",
  as: "episode",
});
Episode.belongsToMany(Character, {
  through: "character_episode",
  as: "episode",
});

module.exports = {
  conn: sequelize,
  Character,
  Episode,
};
