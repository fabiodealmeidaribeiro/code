const {
    getModelParams,
    getModelSearchParams,
    getURLPath,
} = require('../..');
const getControllers = (object) => {
    const Action = {
        index : async (req, res, next) => {
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : 'all',
            }));
        },
        all : async (req, res, next) => {
            const { key } = req['query'];
            const {
                count,
                rows,
            } = await object['modelName'].findAndCountAll({
                ...getModelParams({
                    param : key,
                    column : 'id',
                    ...object['includeAlias'] && object['includeName'] ? {
                        alias : object['includeAlias'],
                        model : object['includeName'],
                    } : {
                    },
                }),
                ...key ? {
                    ...getModelSearchParams({
                        key : key,
                        array : [
                            'title',
                        ],
                    }),
                } : {
                },
            }).then(result => {
                return res.status(200).json({
                    count : result['count'],
                    rows : result['rows'],
                });
            }).catch(error => {
                return res.status(400).json({
                    error : error,
                });
            });
        },
        on : async (req, res, next) => {
            const { id } = req['params'];
            if (!id) {
                return res.redirect(getURLPath({
                    prefix : object['prefix'],
                    suffix : 'all',
                }));
            } else {
                const index = await object['modelName'].findOne({
                    ...getModelParams({
                        param : id,
                        ...object['includeAlias'] && object['includeName'] ? {
                            alias : object['includeAlias'],
                            model : object['includeName'],
                        } : {
                        },
                    }),
                }).then(result => {
                    return res.status(200).json({
                        result : result,
                    });
                }).catch(error => {
                    return res.status(400).json({
                        error : error,
                    });
                });
            };
        },
    };
    return Action;
};
module.exports = {
    getControllers,
}