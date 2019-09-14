'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    dn: DataTypes.STRING,
    registerType: DataTypes.STRING,
    profileType: DataTypes.STRING,
    langId: DataTypes.INTEGER,
    field1: DataTypes.STRING,
    field2: DataTypes.STRING,
    field3: DataTypes.STRING,
    setcurr: DataTypes.STRING,
    lastorder: DataTypes.DATE,
    lastsession: DataTypes.DATE,
    registrationCancelDt: DataTypes.DATE,
    prevLastSession: DataTypes.DATE,
    personalizationId: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    
  };
  return Users;
};