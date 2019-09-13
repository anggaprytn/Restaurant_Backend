'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    category.hasMany(models.menus, {
      as: 'menus',
      foreignKey: 'categoryId'
    })
  };
  return category;
};