let {
    getAll,
    getCreate,
    getDestroy,
    getEdit,
    getIndex,
    getOn,
    getSearch,
    getStore,
    getUpdate,
} = require('../../actions/json');

const getControllers = (object) => {
    const Action = {
        ...getAll(object),
        ...getCreate(object),
        ...getDestroy(object),
        ...getEdit(object),
        ...getIndex(object),
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