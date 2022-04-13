const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Post = sequelize.define("posts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  image:{
    type:DataTypes.STRING,
    allowNull:true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      len: 2
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
