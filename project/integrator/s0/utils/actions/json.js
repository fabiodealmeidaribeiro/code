let {
    addJsDatabase,
    addJsonDatabase,
    packages,
    getFormElement,
    getFormHeader,
    getHash,
    getInputType,
    getJsDatabase,
    getJsPagination,
    getPageTitle,
    getPathPrefix,
    getPJSMFile,
    getURLPath,
    getUserSession,
    isEmpty,
    isEqual,
    jsonFileReader,
    saveJsDatabase,
    getBTNTitle,
} = require('..');


var userData;

// OK!

const getIndex = (object) => {
    const pageName = 'all';
    const Action = {
        index : (req, res, next) => {
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : pageName,
            }));
        },
    }
    return Action;
};

// OK!

const getAll = (object) => {
    const pageName = 'all';
    const Action = {
        all : (req, res, next) => {
            const amount = 2;
            const { page = 1 } = req['query'];
            const jsPaginationAttributes = {
                array : getJsDatabase(object),
                limit : amount,
                offset : page,
            };
            return res.render('menu', {
                index : getJsPagination(jsPaginationAttributes)['listPage'],
                ...packages(),
                ...getJsPagination(jsPaginationAttributes),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPathPrefix(object['prefix']),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

// OK!

const getOn = (object) => {
    const pageName = 'on';
    const Action = {
        on : (req, res, next) => {
            const { id } = req['params'];
            return res.render('form', {
                index : getJsDatabase(object).find((index) => {
                    return index['id'] == id;
                }),
                ...packages(),
                ...getBTNTitle('come back'),
                ...getFormElement({ 
                    element : object['element'],
                    type : 'view',
                }),
                ...getFormHeader({
                    prefix : object['prefix'],
                    suffix : pageName,
                    method : 'POST',
                }),
                ...getInputType(),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

// OK!

const getEdit = (object) => {
    const pageName = 'edit';
    const Action = {
        edit : (req, res, next) => {
            const { id } = req['params'];
            return res.render('form', {
                index : getJsDatabase(object).find((index) => {
                    return index['id'] == id;
                }),
                ...packages(),
                ...getBTNTitle(pageName),
                ...getFormElement({
                    element : object['element'],
                    type : pageName,
                }),
                ...getFormHeader({
                    prefix : object['prefix'],
                    suffix : pageName + '/' + id + '?_method=PUT',
                    enctype : 'multipart/form-data',
                    method : 'POST',
                }),
                ...getInputType(),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

const {
    check,
    validationResult,
    body,
} = require('express-validator');

// OK!

const getFormAttributes = (req, res, next, object, error) => {
    const pageName = 'create';
    return {
        error : error ? error['errors'] : undefined,
        ...packages(),
        ...getBTNTitle(pageName),
        ...getFormElement({
            element : object['element'],
            type : pageName,
        }),
        ...getFormHeader({
            prefix : object['prefix'],
            suffix : pageName,
            enctype : 'multipart/form-data',
            method : 'POST',
        }),
        ...getInputType(),
        ...getPageTitle({
            prefix : object['prefix'],
            suffix : pageName,
        }),
        ...getPJSMFile({
            content : pageName,
            variable : 'isPJSFile',
        }),
        ...getUserSession(userData),
    };
};

const getCreate = (object) => {
    const Action = {
        create : (req, res, next) => {
            return res.render('form', getFormAttributes(req, res, next, object));
        },
    }
    return Action;
};

// OK!

const getStore = (object) => {
    const pageName = 'edit';
    const Action = {
        store : (req, res, next) => {
            const error = validationResult(req);
            if (error.isEmpty()) {
                const { files } = req;
                const password = getHash(req['body']['password']);
                const id = !isEmpty(getJsDatabase(object)) ? getJsDatabase(object)[getJsDatabase(object)['length'] - 1]['id'] + 1 : 1;
                const packages = {
                    attachment : {
                        ...req['body'],
                        id : id,
                        approved : true,
                        deleted : false,
                        disable : false,
                        picture : files['length'] ? files[0]['filename'] : '',
                        password : password,
                        confirmation : password,
                    },
                    require : [
                        ...object['require'],
                    ],
                    title : object['title'],
                }
                addJsDatabase({
                    ...packages,
                });
                addJsonDatabase({
                    ...packages,
                });
                return res.redirect(getURLPath({
                    prefix : object['prefix'],
                    suffix : pageName + '/' + id,
                }));
            } else {
                return res.render('form', getFormAttributes(req, res, next, object, error));
            };
        },
    };
    return Action;
};

// OK!

const getUpdate = (object) => {
    const pageName = 'on';
    const Action = {
        update : (req, res, next) => {
            const { files } = req;
            const { id } = req['params'];
            let database = getJsDatabase(object);
            let index = database.find((index) => { return index['id'] == id; });
            let isName = Object.getOwnPropertyNames(req['body']);
            let isDescriptor = Object.getOwnPropertyDescriptors(req['body']);
            for (let i = 0; i < isName['length']; i++)
                index[isName[i]] = isDescriptor[isName[i]]['value'];
            index['picture'] = files['length'] ? files[0]['filename'] : '';
            const packages = {
                content : database,
                require : [
                    ...object['require'],
                ],
                title : object['title'],
            }
            saveJsDatabase({
                ...packages,
            });
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : pageName + '/' + id,
            }));
        },
    };
    return Action;
};

// OK!

const getDestroy = (object) => {
    const pageName = 'all';
    const Action = {
        destroy : (req, res, next) => {
            const { id } = req['params'];
            saveJsDatabase({
                content : getJsDatabase(object).filter((index) => {
                    return index['id'] != id;
                }),
                require : [
                    ...object['require'],
                ],
                title : object['title'],
            });
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : pageName,
            }));
        },
    };
    return Action;
};

const getSearch = (object) => {
    const Action = {
        search : (req, res, next) => {
        },
    }
    return Action;
};

const getLogin = (object) => {
    const pageName = 'login';
    const Action = {
        login : (req, res, next) => {
            return res.render('form', {
                ...packages(),
                ...getBTNTitle(pageName),
                ...getFormElement({
                    element : object['element'],
                    type : pageName,
                }),
                ...getFormHeader({
                    prefix : object['prefix'],
                    suffix : 'authenticate',
                    method : 'POST',
                }),
                ...getInputType(),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

const getLogout = (object) => {
    const Action = {
        logout : (req, res, next) => {
            req['session'].destroy();
            res.clearCookie();
            req.logout();
        },
    }
    return Action;
};

const getAuthenticate = (object) => {
    const pageName = 'all';
    const Action = {
        authenticate : (req, res, next) => {
            const record = jsonFileReader([
                ...object['require'],
                object['title'] + '.json',
            ]);
            const index = record.find((index) => {
                return index['accesskey'] === req['body']['accesskey'];
            });
            if (!index) 
                return res.send('invalid user!');
            if (!isEqual({ front : req['body']['password'], back : index['password'] }))
                return res.send('invalid password!');
            delete index['password'];
            delete index['confirmation'];
            req['session']['user'] = index;
            userData = req['session']['user'];
            if (req['body']['logged'] != undefined) {
                res.cookie('id', userData['id'], {
                    maxAge : 600000,
                });
                res.cookie('accesskey', userData['accesskey'], {
                    maxAge : 600000,
                });
            }
            console.log(req.cookies);
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : pageName,
            }));
        },
    }
    return Action;
};

module.exports = {
    getAll,
    getAuthenticate,
    getCreate,
    getDestroy,
    getEdit,
    getIndex,
    getLogin,
    getLogout,
    getOn,
    getSearch,
    getStore,
    getUpdate,
};