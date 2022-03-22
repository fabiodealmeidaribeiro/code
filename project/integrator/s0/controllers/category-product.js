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
    'category-product.js',
];
module.exports = {
    ...getControllers({
        element : 'category',
        modelName : Category,
        includeAlias : 'product',
        includeName : Product,
        prefix : 'category-product',
        ...isThere(contentFilePath) ? {
            bulkMaker : require(urlJoin([
                '..',
                ...contentFilePath,
            ]))
        } : {
        },
    }),
};