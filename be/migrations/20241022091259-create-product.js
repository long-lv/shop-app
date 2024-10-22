'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      image: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      old_price: {
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.TEXT
      },
      specification: {
        type: Sequelize.TEXT
      },
      buyturn: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "brands",
          key: "id"
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id"
        }
      },
      rate: {
        type: Sequelize.INTEGER
      },
      total_rate: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};