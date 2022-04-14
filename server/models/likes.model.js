const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Post = sequelize.define("posts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
 
});

module.exports = Post;
