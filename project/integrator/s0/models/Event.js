const {
    getFirstUpperCase,
    getPlural,
} = require('../utils');
const {
    getModelEvent,
} = require('../utils/sequelize');
const allName = 'event';
module.exports = (sequelize, DataType) => {
	const Event = sequelize.define(getFirstUpperCase(allName), {
        ...getModelEvent(DataType),
    },
    {
        tableName : getPlural(allName),
        timestamps : false,
    });
    Event.associate = (modelsList) => {
        Event.belongsTo(modelsList.Category, {
            foreignKey : 'fk_category',
            as : 'category',
        });
        Event.belongsTo(modelsList.Public, {
            foreignKey : 'fk_public',
            as : 'public',
        });
        Event.belongsToMany(modelsList.Order, {
            foreignKey : 'fk_order',
            as : 'order',
            through : modelsList.Item,
        });
    };
	return Event;
};