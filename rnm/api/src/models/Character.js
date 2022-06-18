const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      //defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
