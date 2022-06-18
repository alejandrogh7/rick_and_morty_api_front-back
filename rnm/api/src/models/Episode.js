const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("episode", {
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
  });
};
