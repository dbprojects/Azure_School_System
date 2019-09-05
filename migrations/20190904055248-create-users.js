'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dn: {
        type: Sequelize.STRING
      },
      registerType: {
        type: Sequelize.STRING
      },
      profileType: {
        type: Sequelize.STRING
      },
      language_id: {
        type: Sequelize.INTEGER
      },
      field1: {
        type: Sequelize.STRING
      },
      field2: {
        type: Sequelize.STRING
      },
      field3: {
        type: Sequelize.STRING
      },
      setcurr: {
        type: Sequelize.STRING
      },
      lastorder: {
        type: Sequelize.DATE
      },
      lastsession: {
        type: Sequelize.DATE
      },
      registrationCancelDt: {
        type: Sequelize.DATE
      },
      prevLastSession: {
        type: Sequelize.DATE
      },
      personalizationId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};