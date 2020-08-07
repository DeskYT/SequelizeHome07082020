'use strict';
/*const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
    }
  };
  Order.init({
    id_buy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};*/

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id_buy: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    total_price: {
      allowNull: false,
      type: DataTypes.NUMERIC,
    }
  }, {});
  Order.belongsToMany(Buy, { through: 'Orders_Buys' });
  return Order;
}