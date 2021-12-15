const Sequelize = require('sequelize');

module.exports = {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
  },
  projectId: Sequelize.STRING,
  buyer: Sequelize.STRING,
  registry: Sequelize.STRING,
  blockIdentifier: Sequelize.STRING,
  identifier: Sequelize.STRING,
  qualificationId: Sequelize.NUMBER,
  unitType: Sequelize.STRING,
  unitCount: Sequelize.NUMBER,
  unitStatus: Sequelize.STRING,
  unitStatusDate: Sequelize.DATE,
  transactionType: Sequelize.STRING,
  unitIssuanceLocation: Sequelize.STRING,
  unitLink: Sequelize.STRING,
  correspondingAdjustment: Sequelize.STRING,
  unitTag: Sequelize.STRING,
  vintageId: Sequelize.NUMBER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
};
