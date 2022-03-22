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
        modelName : Event,
        includeAlias : 'public',
        includeName : Public,
        prefix : 'api-event',
    }),
};