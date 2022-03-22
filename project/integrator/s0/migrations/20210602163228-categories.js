'use strict';
const {
  getPlural,
} = require('../utils');
const {
  getModelCategory,
} = require('../utils/sequelize');
const allName = 'category';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return queryInterface.createTable(getPlural(allName), {
      ...getModelCategory(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(getPlural(allName));
  },
};