const control = require('../controllers');
const routes = require('express').Router();

routes.get('/photos/:id?', async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(200).json({
            message : 'Invalid or not informed!',
        });
    } else {
        const index = await require('axios').create({
            baseURL : 'https://jsonplaceholder.typicode.com',
            timeout : 4000,
        }).get('/photos/' + id).then(result => {
            return res.status(200).json({
                result : result['data'],
            });
        }).catch(error => {
            return res.status(404).json({
                error : error,
            });
        });
    };
});

// routes.get('/photos/:id?', async (req, res, next) => {
//     const { id } = req.params;
//     if (!id) {
//         return res.status(200).json({
//             message : 'Invalid or not informed!',
//         });
//     } else {
//         try {
//             const index = await require('axios').create({
//                 baseURL : 'https://jsonplaceholder.typicode.com',
//                 timeout : 4000,
//             }).get('/photos/' + id);
//             return res.status(200).json({
//                 index : index['data'],
//             });
//         } catch (error) {
//             return res.status(404).json({
//                 error : error,
//             });
//         };
//     };
// });

// routes.get('/cep/:id?', async (req, res, next) => {
//     const { id } = req.params;
//     if(!id) {
//         return res.status(200).json({
//             message : 'Invalid or not informed!',
//         });
//     } else {
//         const index = await require('axios').create({
//             baseURL : 'http://viacep.com.br/ws/',
//             timeout : 4000,
//         }).get(id + '/json/').then(result => {
//             return res.status(200).json({
//                 result : result['data'],
//             });
//         }).catch(error => {
//             return res.status(404).json({
//                 error : error,
//             });
//         });
//     };
// });

// routes.get('/cep/:id?', async (req, res, next) => {
//     const { id } = req.params;
//     if(!id) {
//         return res.status(200).json({
//             message : 'Invalid or not informed!',
//         });
//     } else {
//         const index = await require('axios').create({
//             baseURL : 'https://ws.apicep.com/cep/',
//             timeout : 4000,
//         }).get(id + '.json').then(result => {
//             return res.status(200).json({
//                 result : result['data'],
//             });
//         }).catch(error => {
//             return res.status(404).json({
//                 error : error,
//             });
//         });
//     };
// });

routes.get('/cep/:id?', async (req, res, next) => {
    const { id } = req.params;
    if(!id) {
        return res.status(200).json({
            message : 'Invalid or not informed!',
        });
    } else {
        const index = await require('axios').create({
            baseURL : 'https://cep.awesomeapi.com.br',
            timeout : 4000,
        }).get('/json/' + id).then(result => {
            return res.status(200).json({
                result : result['data'],
            });
        }).catch(error => {
            return res.status(404).json({
                error : error,
            });
        });
    }
});

routes.get('/currency/:id?', async (req, res, next) => {
    const { id } = req.params;
    const index = await require('axios').create({
        baseURL : 'https://economia.awesomeapi.com.br',
        timeout : 4000,
    }).get(!id ? '/json/all/' : '/last/' + id).then(result => {
        return res.status(200).json({
            result : id ? result['data'][(id).toUpperCase() + 'BRL'] : result['data'],
        });
    }).catch(error => {
        return res.status(404).json({
            error : error,
        });
    });
});

// name
// topLevelDomain
// alpha2Code
// alpha3Code
// callingCodes
// capital
// altSpellings
// region
// subregion
// population
// latlng
// demonym
// area
// gini
// timezones
// borders
// nativeName
// numericCode
// currencies
// languages
// translations
// flag
// regionalBlocs
// cioc

routes.get('/region/:id?', async (req, res, next) => {
    // http://localhost:3333/region/africa?a=name&b=capital
    const queries = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
    ];
    const { id } = req.params;
    const axios = require('axios').default;
    const index = await axios.create({
        baseURL : 'https://restcountries.eu/rest/v2/region',
        timeout : 4000,
    }).get(id).then(result => {
        return res.status(200).json({
            result : result['data'],
        });
    }).catch(error => {
        return res.status(404).json({
            error : error,
        });
    });
    let number = 0;
    let indexes = [];
    for (let i = 0; i <= Number(index['length'] - 1); i++) {
        indexes.push({});
    };
    for (let x = 0; x <= Number(index['length'] - 1); x++) {
        for (let y = 0; y <= Number(queries['length'] - 1); y++) {
            number += req.query[queries[y]] ? 1 : 0;
            indexes[x][req.query[queries[y]]] = req.query[queries[y]] ? index[x][req.query[queries[y]]] : undefined;
        };
    };
    return res.status(200).json(number ? indexes : index);
});

routes.get('/countries/:id?', async (req, res, next) => {
    const { id } = req.params;
    const index = await require('axios').create({
        baseURL : 'https://restcountries.eu/rest/v2/name/',
        timeout : 4000,
    }).get(id ? id : '/all/').then(result => {
        return res.status(200).json({
            result : result['data'],
        });
    }).catch(error => {
        return res.status(404).json({
            error : error,
        });
    });
});

routes.get('/pokemon/:id?', async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(200).json({
            message : 'Invalid or not informed!',
        });
    } else {
        const index = await require('axios').create({
            baseURL : 'https://pokeapi.co/api/v2',
            timeout : 4000,
        }).get('/pokemon/' + id).then(result => {
            return res.status(200).json({
                result : result['data'],
            });
        }).catch(error => {
            return res.status(404).json({
                error : error,
            });
        });
    };
});

routes.get('/', (req, res, next) => {
    return res.redirect('/public/');
});

// routes.get('/public/create', control.create);

routes.post('/public/store', control.store);

// routes.get('/public/login', control.login);
// routes.post('/public/authenticate', control.authenticate);
// routes.get('/public/logout', control.logout);
// routes.use(require('../middlewares'));

routes.get('/public/', control.index);
routes.get('/public/all', control.all);
routes.get('/public/one/:id?', control.one);

// routes.get('/public/edit/:id', control.edit);

routes.put('/public/update/:id', control.update);
routes.put('/public/disable/:id', control.disable);
routes.delete('/public/destroy/:id', control.destroy);

// routes.post('/public/authenticated', control.authenticated);
// routes.get('/public/', control.search);

routes.get('/public/bulk', control.bulk);

module.exports = routes;