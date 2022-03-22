'use strict';
const {
  getPlural,
} = require('../utils');
const {
  getModelEvent,
} = require('../utils/sequelize');
const allName = 'event';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return queryInterface.createTable(getPlural(allName), {
      ...getModelEvent(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(getPlural(allName));
  },
};