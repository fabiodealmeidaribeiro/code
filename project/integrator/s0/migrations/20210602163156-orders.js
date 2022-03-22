'use strict';
const {
  getPlural,
} = require('../utils');
const {
  getModelOrder,
} = require('../utils/sequelize');
const allName = 'order';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return queryInterface.createTable(getPlural(allName), {
      ...getModelOrder(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(getPlural(allName));
  },
};