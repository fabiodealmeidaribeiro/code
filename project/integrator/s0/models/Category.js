const {
    getFirstUpperCase,
    getPlural,
} = require('../utils');
const {
    getModelCategory,
} = require('../utils/sequelize');
const allName = 'category';
module.exports = (sequelize, DataType) => {
	const Category = sequelize.define(getFirstUpperCase(allName), {
        ...getModelCategory(DataType),
    },
    {
        tableName : getPlural(allName),
        timestamps : false,
    });
    Category.associate = (modelsList) => {
        Category.hasMany(modelsList.Event, {
            foreignKey : 'fk_category',
            as : 'event',
        });
        Category.hasMany(modelsList.Product, {
            foreignKey : 'fk_category',
            as : 'product',
        });
        Category.hasMany(modelsList.Service, {
            foreignKey : 'fk_category',
            as : 'service',
        });
    };
	return Category;
};