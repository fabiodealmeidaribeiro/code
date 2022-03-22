let {
    getBTNTitle,
    getFirstUpperCase,
    getFormElement,
    getFormHeader,
    getInputType,
    getPJSMFile,
    getModelPagination,
    getModelParams,
    getModelSearchParams,
    getPageTitle,
    getPathPrefix,
    getSearchAction,
    getURLPath,
    getUserSession,
    packages,
} = require('..');

// OK!

const getIndex = (object) => {
    const pageName = 'all';
    const Action = {
        index : async (req, res, next) => {
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
        all : async (req, res, next) => {
            const amount = 2;
            const {
                page = 1,
                key = '',
            } = req['query'];
            const {
                count,
                rows : index,
            } = await object['modelName'].findAndCountAll({
                ...getModelParams({
                    model : object['includeName'],
                    alias : object['includeAlias'],
                    param : key,
                    column : 'id',
                    limit : amount,
                    offset : (page - 1) * amount,
                }),
            });
            return res.render('menu', {
                key : key,
                index : index,
                ...packages(),
                ...getInputType(),
                ...getModelPagination({
                    count : count,
                    amount : amount,
                    offset : page,
                }),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPathPrefix(object['prefix']),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getSearchAction({
                    prefix : object['prefix'],
                    suffix : 'search',
                }),
                ...getUserSession(req['session']['user']),
            });
        },
    }
    return Action;
};

// OK!

const getIn = (object) => {
    const pageName = 'in';
    const Action = {
        in : async (req, res, next) => {
            const amount = 1;
            const {
                page = 1,
                key = '',
            } = req['query'];
            const { id } = req['params'];
            const index = await object['modelName'].findOne({
                ...getModelParams({
                    model : object['includeName'],
                    alias : object['includeAlias'],
                    param : id,
                    column : 'id',
                    limit : amount,
                    offset : (page - 1) * amount,
                }),
            });
            return res.render('menu', {
                key : key,
                index : index[object['includeAlias']],
                ...packages(),
                ...getInputType(),
                ...getModelPagination({
                    count : index['length'],
                    amount : amount,
                    offset : page,
                }),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPathPrefix(object['prefix'].replace('category', 'item')),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getSearchAction({
                    prefix : object['prefix'],
                    suffix : 'search',
                }),
                ...getUserSession(req['session']['user']),
            });
        },
    }
    return Action;
};

// OK!

const getOn = (object) => {
    const pageName = 'on';
    const Action = {
        on : async (req, res, next) => {
            const { id } = req['params'];
            const index = await object['modelName'].findOne({
                ...getModelParams({
                    model : object['includeName'],
                    alias : object['includeAlias'],
                    param : id,
                    column : 'id',
                }),
            });
            return res.render('form', {
                index : index,
                btnTitle : 'come back',
                ...packages(),
                ...getFormElement({
                    element : object['element'],
                    type : 'view',
                }),
                ...getInputType(),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getUserSession(req['session']['user']),            
                ...getFormHeader({
                    prefix : object['prefix'],
                    suffix : pageName,
                    method : 'POST',
                }),
            });
        },
    }
    return Action;
};

const getCreate = (object) => {
    const pageName = 'create';
    const Action = {
        create : async (req, res, next) => {
            return res.render('form', {
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
                }),
                ...getUserSession(req['session']['user']),
            });
        },
    }
    return Action;
};

const getStore = (object) => {
    const pageName = 'all';
    const Action = {
        store : async (req, res, next) => {
            const index = await object['modelName'].create(req['body']);
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : pageName,
            }));
        },
    }
    return Action;
};

const getEdit = (object) => {
    const pageName = 'edit';
    const Action = {
        edit : async (req, res, next) => {
            const { id } = req['params'];
            const index = await object['modelName'].findOne({
                ...getModelParams({
                    param : id,
                    column : 'id',
                }),
            });
            return res.render('form', {
                index : index,
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
                ...getUserSession(req['session']['user']),
            });
        },
    }
    return Action;
};

const getUpdate = (object) => {
    const pageName = 'all';
    const Action = {
        update : async (req, res, next) => {
            const { id } = req['params'];
            const index = await object['modelName'].update(req['body'],
            {
                ...getModelParams({
                    param : id,
                    column : 'id',
                }),
            });
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : pageName,
            }));
        },
    }
    return Action;
};

const getDestroy = (object) => {
    const pageName = 'all';
    const Action = {
        destroy : async (req, res, next) => {
            const { id } = req['params'];
            const index = await object['modelName'].destroy({
                ...getModelParams({
                    param : id,
                    column : 'id',
                }),
            });
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : pageName,
            }));
        },
    }
    return Action;
};

const getBulk = (object) => {
    const Action = {
        bulk : async (req, res, next) => {
            const index = object['bulkMaker']
            ? await object['modelName'].bulkCreate(object['bulkMaker'])
            : getFirstUpperCase('File not found!');
            return res.send(index);
        },
    }
    return Action;
};

const getSearch = (object) => {
    const pageName = 'search';
    const Action = {
        search : async (req, res, next) => {
            const amount = 2;
            const {
                page = 1,
                key = '',
            } = req['query'];
            const {
                count,
                rows : index,
            } = await object['modelName'].findAndCountAll({
                ...getModelParams({
                    model : object['includeName'],
                    alias : object['includeAlias'],
                    param : key,
                    column : 'id',
                    limit : amount,
                    offset : (page - 1) * amount,
                }),
                ...getModelSearchParams({
                    array : [
                        'description',
                        'title',
                    ],
                    key : key,
                }),
            });
            return res.render('menu', {
                key : key,
                index : index,
                ...packages(),
                ...getInputType(),
                ...getModelPagination({
                    count : count,
                    amount : amount,
                    offset : page,
                }),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getPathPrefix(object['prefix']),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...getSearchAction({
                    prefix : object['prefix'],
                    suffix : pageName,
                }),
                ...getUserSession(req['session']['user']),
            });
        },
    }
    return Action;
};

const getLogin = (object) => {
    const pageName = 'login';
    const Action = {
        login : async (req, res, next) => {
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
            });
        },
    }
    return Action;
};

const getLogout = (object) => {
    const Action = {
        logout : async (req, res, next) => {
        },
    }
    return Action;
};

const getAuthenticate = (object) => {
    const Action = {
        authenticate : async (req, res, next) => {
        },
    }
    return Action;
};

module.exports = {
    getAll,
    getAuthenticate,
    getBulk,
    getCreate,
    getDestroy,
    getEdit,
    getIndex,
    getIn,
    getLogin,
    getLogout,
    getOn,
    getSearch,
    getStore,
    getUpdate,
};