'use strict';
const {
  getModelPublic,
  getPlural,
} = require('../utils');
const allName = 'public';
module.exports = {
  up : async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(getPlural(allName), {
      ...getModelPublic(Sequelize),
    });
  },
  down : async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable(getPlural(allName));
  },
};