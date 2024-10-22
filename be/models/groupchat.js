'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GroupChat.belongsTo(models.User, {
        foreignKey: "sender_id"
      })
      GroupChat.belongsTo(models.User, {
        foreignKey: "admin_id"
      })
      GroupChat.hasOne(models.Chat, {
        foreignKey: "group_chat_id"
      })
    }
  }
  GroupChat.init({
    sender_id: DataTypes.INTEGER,
    admin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupChat',
  });
  return GroupChat;
};