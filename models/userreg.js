'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserReg = sequelize.define('UserReg', {

    status: DataTypes.INTEGER,
    policyAcctId: DataTypes.STRING,
    logonId: DataTypes.STRING,
    logonPassword: DataTypes.STRING,
    passwordExpired: DataTypes.INTEGER,
    challengeQuestion: DataTypes.STRING,
    challengeAnswer: DataTypes.STRING,
    timeout: DataTypes.INTEGER,
    passwordRetries: DataTypes.INTEGER,
    salt: DataTypes.STRING,
    passwordCreation: DataTypes.DATE,
    passwordInvalid: DataTypes.DATE
  }, {});
  UserReg.associate = function(models) {
    // associations can be defined here
    UserReg.hasOne(models.Users, {
      foreignKey: 'userId',
      as: 'userId'
    });
  };
  return UserReg;
};