const {
    getFirstUpperCase,
    getPlural,
} = require('../utils');
const {
    getModelService,
} = require('../utils/sequelize');
const allName = 'service';
module.exports = (sequelize, DataType) => {
	const Service = sequelize.define(getFirstUpperCase(allName), {
        ...getModelService(DataType),
    },
    {
        tableName : getPlural(allName),
        timestamps : false,
    });
    Service.associate = (modelsList) => {
        Service.belongsTo(modelsList.Category, {
            foreignKey : 'fk_category',
            as : 'category',
        });
        Service.belongsTo(modelsList.Public, {
            foreignKey : 'fk_public',
            as : 'public',
        });
        Service.belongsToMany(modelsList.Order, {
            foreignKey : 'fk_order',
            as : 'order',
            through : modelsList.Item,
        });
    };
	return Service;
};