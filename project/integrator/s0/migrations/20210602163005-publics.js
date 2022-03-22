'use strict';
const {
  getPlural,
} = require('../utils');
const {
  getModelPublic,
} = require('../utils/sequelize');
const allName = 'public';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return queryInterface.createTable(getPlural(allName), {
      ...getModelPublic(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(getPlural(allName));
  },
};