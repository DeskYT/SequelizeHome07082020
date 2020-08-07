'use strict';
/*const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.NUMERIC,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
*/
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id_product: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
  }, {});
  /*Product.associate = function (models) {
    Product.hasMany(models.Buy, {
      foreignKey: {
        field: 'id',
      },
      as: 'Tasks'
    });
  };*/
  /*Product.associate = function (models) {
    Product.belongsTo(models.Buy, {
      foreignKey: {
        field: 'userId',
      },
      as: 'Tasks'
    });
  };*/
  return Product;
}