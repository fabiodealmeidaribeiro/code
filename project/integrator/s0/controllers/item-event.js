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
    'item-event.js',
];
module.exports = {
    ...getControllers({
        element : 'event',
        modelName : Event,
        includeAlias : 'category',
        includeName : Category,
        prefix : 'item-event',
        ...isThere(contentFilePath) ? {
            bulkMaker : require(urlJoin([
                '..',
                ...contentFilePath,
            ]))
        } : {
        },
    }),
};