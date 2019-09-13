'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    tableNumber: DataTypes.INTEGER,
    finishedTime: DataTypes.TIME,
    subtotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    serviceCharge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE,
    isPaid: DataTypes.TINYINT
  }, {});
  transaction.associate = function(models) {
    transaction.hasMany(models.order, {
      as: 'orders',
      foreignKey: 'transactionId'
    });
  };
  return transaction;
};