'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category_news.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Category_news',
    underscored: true
  });
  return Category_news;
};