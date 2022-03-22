const {
    isTheLast,
    isThis,
} = require('../utils');

const getTitle = getControl = (index) => {
    return isTheLast(index, '?') ? index.substr(0, index['length'] - 1) : index;
};

const getParam = (index) => {
    return isTheLast(index, '?') ? '/:id?' : '';
};

const getRoute = (route, method) => {
    const result = [];
    for (let i = 0; i < route['length']; i++)
        result.push({
            method : method,
            title : isThis(route[i], 'string') ? getTitle(route[i]) : getTitle(route[i][0]),
            param : isThis(route[i], 'string') ? getParam(route[i]) : getParam(route[i][0]),
            control : isThis(route[i], 'string') ? getControl(route[i]) : getControl(route[i][1]),
        });
    return result;
};

const view = [
    ...getRoute([
        [ '', 'index' ],
        'all',
        'on?',
    ], 'get'),
];

const change = [
    ...getRoute([
        'create',
        'edit?',
    ], 'get'),
    ...getRoute([
        [ 'create', 'store' ],
    ], 'post'),
    ...getRoute([
        [ 'edit?', 'update' ],
    ], 'put'),
    ...getRoute([
        [ 'delete?', 'destroy' ],
    ], 'delete'),
];

const log = [
    ...getRoute([
        'authenticate'
    ], 'post'),
    ...getRoute([
        'login',
        'logout'
    ], 'get'),
];

const bulk = [
    ...getRoute([
        'bulk',
    ], 'get'),
];

const search = [
    ...getRoute([
        'search',
    ], 'get'),
];

const indexes = [];
const index = require('../database/option')['pageNames'];
for (let i = 0; i < index['length']; i++)
    indexes.push(index[i]['option'] ? index[i]['option'] : 'index');

const routes = {
    index : [
        ...getRoute([
            [ '', 'index' ],
            ...indexes,
        ], 'get'),
    ],
    api : [
        ...view,
    ],
    public : [
        ...bulk,
        ...change,
        ...log,
        ...search,
        ...view,
    ],
    item : [
        ...bulk,
        ...change,
        ...search,
        ...view,
    ],
    category : [
        ...bulk,
        ...change,
        ...search,
        ...view,
        ...getRoute([
            'in?',
        ], 'get'),
    ],
    jsonItem : [
        ...change,
        ...view,
    ],
    jsonPublic : [
        ...change,
        ...view,
        ...log,
    ],
    lab : [
        ...getRoute([
            'a',
            'b',
            'c?',
            'd?',
            'e',
            'f?',
            'g',
            'h', 
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
        ], 'get'),
    ],
};

module.exports = routes;