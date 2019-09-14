'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserReg', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'userId',
          as: 'userId'
        }
      },
      status: {
        type: Sequelize.INTEGER
      },
      policyAcctId: {
        type: Sequelize.STRING
      },
      logonId: {
        type: Sequelize.STRING
      },
      logonPassword: {
        type: Sequelize.STRING
      },
      passwordExpired: {
        type: Sequelize.INTEGER
      },
      challengeQuestion: {
        type: Sequelize.STRING
      },
      challengeAnswer: {
        type: Sequelize.STRING
      },
      timeout: {
        type: Sequelize.INTEGER
      },
      passwordRetries: {
        type: Sequelize.INTEGER
      },
      salt: {
        type: Sequelize.STRING
      },
      passwordCreation: {
        type: Sequelize.DATE
      },
      passwordInvalid: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('UserRegs');
  }
};