'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.hasMany(models.NewDetail, {
        foreignKey: 'news_id'
      })
    }
  }
  News.init({
    title: DataTypes.STRING,
    category_news_id: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {
  sequelize,
    modelName: 'News',
    underscored: true
  });
  return News;
};