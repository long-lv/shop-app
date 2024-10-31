'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand, {
        foreignKey: "brand_id"
      })
      Product.belongsTo(models.Category, {
        foreignKey: "category_id"
      })
      Product.hasMany(models.OrderDetail, {
        foreignKey: 'product_id'
      })
      Product.hasMany(models.BannerDetail, {
        foreignKey: 'product_id'
      })
      Product.hasMany(models.Feedback, {
        foreignKey: 'product_id'
      })
      Product.hasMany(models.NewDetail, {
        foreignKey: 'product_id'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    old_price: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    specification: DataTypes.TEXT,
    buyturn: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
    total_rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};