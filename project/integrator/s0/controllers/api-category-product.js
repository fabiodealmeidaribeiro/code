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
        modelName : Category,
        includeAlias : 'product',
        includeName : Product,
        prefix : 'api-category-product',
    }),
};