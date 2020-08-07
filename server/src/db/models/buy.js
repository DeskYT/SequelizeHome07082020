'use strict';
/*const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buy extends Model {
    static associate(models) {
    }
  };
  Buy.init({
    id_product: DataTypes.NUMERIC,
    amount_buy: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Buy',
  });
  return Buy;
};*/
module.exports = (sequelize, DataTypes) => {
  const Buy = sequelize.define('Buy', {
    id_buy: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_product: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    amount_buy: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {});
  Buy.associate = function (models) {
    Buy.belongsTo(models.Product, {
      foreignKey: {
        field: 'userId',
      },
      as: 'Tasks'
    });
  };
  Buy.belongsToMany(Order, { through: 'Orders_Buys' });
  Order.belongsToMany(Buy, { through: 'User_Profiles' });
  return Buy;
}