const {
    Category,
    Event,
    Order,
    Product,
    Public,
    Service,
} = require('../models');
let {
    getControllers,
} = require('../utils/controllers/database/item');
let {
    isThere,
    urlJoin,
} = require('../utils');
const contentFilePath = [
    'bulkmakers',
    'item-service.js',
];
module.exports = {
    ...getControllers({
        element : 'service',
        modelName : Service,
        includeAlias : 'category',
        includeName : Category,
        prefix : 'item-service',
        ...isThere(contentFilePath) ? {
            bulkMaker : require(urlJoin([
                '..',
                ...contentFilePath,
            ]))
        } : {
        },
    }),
};