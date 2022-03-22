let {
    getControllers,
} = require('../utils/controllers/json/public');
module.exports = {
    ...getControllers({
        element : 'public',
        prefix : 'json-admin',
        require : [
            'database',
            'text',
        ],
        title : 'client',
    }),
};


