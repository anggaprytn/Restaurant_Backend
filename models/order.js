'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.menus, {
      as: 'menu',
      foreignKey: 'menuId',
      attributes: {
        exclude: ['price', 'isStared']
      }
    });

    // order.belongsTo(models.transaction, {
    //   as: 'transaction',
    //   foreignKey: 'transactionId'
    // })
  };
  return order;
};