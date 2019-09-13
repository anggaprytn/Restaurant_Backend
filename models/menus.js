'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    isStared: DataTypes.TINYINT,
    categoryId: DataTypes.INTEGER
  }, {});
  menus.associate = function(models) {
    menus.belongsTo(models.category, {
      as: 'category',
      foreignKey: 'categoryId'
    })
  };
  return menus;
};