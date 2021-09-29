const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allownull: false,
      primarykey: true,
      autoincrement: true
    },
    
    category_name: {
      type: DataTypes.STRING,
      allownull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
