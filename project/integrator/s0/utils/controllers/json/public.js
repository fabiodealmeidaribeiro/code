let {
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
} = require('../../actions/json');

const getControllers = (object) => {
    const Action = {
        ...getAll(object),
        ...getAuthenticate(object),
        ...getCreate(object),
        ...getDestroy(object),
        ...getEdit(object),
        ...getIndex(object),
        ...getLogin(object),
        ...getLogout(object),
        ...getOn(object),
        ...getSearch(object),
        ...getStore(object),
        ...getUpdate(object),
    }
    return Action;
};

module.exports = {
    getControllers,  
};