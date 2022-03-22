const {
    getFirstUpperCase,
    getPlural,
} = require('../utils');
const {
    getModelItem,
} = require('../utils/sequelize');
const allName = 'item';
module.exports = (sequelize, DataType) => {
	const Item = sequelize.define(getFirstUpperCase(allName), {
        ...getModelItem(DataType),
    },
    {
        tableName : getPlural(allName),
        timestamps : false,
    });
    return Item;
};