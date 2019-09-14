'use strict';
module.exports = (sequelize, DataTypes) => {
  const Temp = sequelize.define('Temp', {
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstNname: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Temp.associate = function(models) {
    // associations can be defined here
  };
  return Temp;
};