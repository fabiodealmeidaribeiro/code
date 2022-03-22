const {
    isThere,
} = require('../utils');
const middleware = require('../middlewares');
const router = require('express').Router();
const api = require('./routes')['api'];
const index = require('./routes')['index'];
const jsonItem = require('./routes')['jsonItem'];
const jsonPublic = require('./routes')['jsonPublic'];
const lab = require('./routes')['lab'];
const category = require('./routes')['category'];
const item = require('./routes')['item'];
const public = require('./routes')['public'];
const isControl = [
    { control : api, path : 'api-admin', },
    { control : api, path : 'api-category-event', },
    { control : api, path : 'api-category-product', },
    { control : api, path : 'api-category-service', },
    { control : api, path : 'api-event', },
    { control : api, path : 'api-product', },
    { control : api, path : 'api-service', },
    { control : index, path : 'index', },
    { control : lab, path : 'lab', },
    { control : category, path : 'category-event', },
    { control : category, path : 'category-product', },
    { control : category, path : 'category-service', },
    { control : item, path : 'order', },
    { control : item, path : 'item-event', },
    { control : item, path : 'item-product', },
    { control : item, path : 'item-service', },
    { control : public, path : 'public-admin', },
    { control : public, path : 'public-client', },
    { control : public, path : 'public-user', },
    { control : jsonItem, path : 'json-recipe', },
    { control : jsonPublic, path : 'json-admin', },
    { control : jsonPublic, path : 'json-client', },
];
let getRouter = (control, url, object) => {
    for (let i = 0; i < object['length']; i++) {
        router[object[i]['method']](
            String(url + object[i]['title'] + object[i]['param']),
            // middleware.authenticate,
            // middleware.report,
            // middleware.validator(),
            middleware.upload.any(),
            control[object[i]['control']],
        );
    };
};
for (let i = 0; i < isControl['length']; i++) {
    if (isThere(['controllers', isControl[i]['path'] + '.js'])) {
        const isController = require('../controllers/' + isControl[i]['path']);
        const isURL = isControl[i]['path'] === 'index'
        ? '/' : isControl[i]['path'] ? '/' + isControl[i]['path'].split('-').join('/') + '/'
        : '/';
        getRouter(isController, isURL, isControl[i]['control']);
    };
};
// router.get('/all', middleware.authenticate, controllers.all);
module.exports = router;