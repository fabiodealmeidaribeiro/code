const {
    getFirstUpperCase,
    getPlural,
} = require('../utils');
const {
    getModelProduct,
} = require('../utils/sequelize');
const allName = 'product';
module.exports = (sequelize, DataType) => {
	const Product = sequelize.define(getFirstUpperCase(allName), {
        ...getModelProduct(DataType),
    },
    {
        tableName : getPlural(allName),
        timestamps : false,
    });
    Product.associate = (modelsList) => {
        Product.belongsTo(modelsList.Category, {
            foreignKey : 'fk_category',
            as : 'category',
        });
        Product.belongsTo(modelsList.Public, {
            foreignKey : 'fk_public',
            as : 'public',
        });
        Product.belongsToMany(modelsList.Order, {
            foreignKey : 'fk_order',
            as : 'order',
            through : modelsList.Item,
        });
    };
	return Product;
};