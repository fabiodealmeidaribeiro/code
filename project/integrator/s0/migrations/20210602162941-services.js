'use strict';
const {
  getPlural,
} = require('../utils');
const {
  getModelService,
} = require('../utils/sequelize');
const allName = 'service';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return queryInterface.createTable(getPlural(allName), {
      ...getModelService(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(getPlural(allName));
  },
};