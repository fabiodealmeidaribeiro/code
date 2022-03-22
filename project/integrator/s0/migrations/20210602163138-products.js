'use strict';
const {
  getPlural,
} = require('../utils');
const {
  getModelProduct,
} = require('../utils/sequelize');
const allName = 'product';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return queryInterface.createTable(getPlural(allName), {
      ...getModelProduct(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(getPlural(allName));
  },
};