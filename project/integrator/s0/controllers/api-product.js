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
        modelName : Product,
        includeAlias : 'public',
        includeName : Public,
        prefix : 'api-product',
    }),
};