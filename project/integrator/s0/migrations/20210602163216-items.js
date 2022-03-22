'use strict';
const {
  getPlural,
} = require('../utils');
const {
  getModelItem,
} = require('../utils/sequelize');
const allName = 'item';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return queryInterface.createTable(getPlural(allName), {
      ...getModelItem(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(getPlural(allName));
  },
};