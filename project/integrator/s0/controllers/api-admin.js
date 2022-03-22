const {
    Category,
    Event,
    Order,
    Product,
    Public,
    Service,
} = require('../models');
const {
    getControllers,
} = require('../utils/controllers/database/api');
module.exports = {
    ...getControllers({
        modelName : Public,
        includeAlias : 'event',
        includeName : Event,
        prefix : 'api-admin',
    }),
};