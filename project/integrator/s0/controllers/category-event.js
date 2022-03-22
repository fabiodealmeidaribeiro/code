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
} = require('../utils/controllers/database/category');
let {
    isThere,
    urlJoin,
} = require('../utils');
const contentFilePath = [
    'bulkmakers',
    'category-event.js',
];
module.exports = {
    ...getControllers({
        element : 'category',
        modelName : Category,
        includeAlias : 'event',
        includeName : Event,
        prefix : 'category-event',
        ...isThere(contentFilePath) ? {
            bulkMaker : require(urlJoin([
                '..',
                ...contentFilePath,
            ]))
        } : {
        },
    }),
};