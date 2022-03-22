const {
    getPCSSFile,
    getPJSMFile,
    packages,
    jsonFileReader,
    getPageTitle,
} = require('../utils');
const Action = {};
const index = jsonFileReader([ 'database', 'json', 'page-names.json' ]);
index.push('index');
index.forEach((value) => {
    Action[value] = (req, res, next) => {
        return res.render(value, {
            ...getPageTitle({ prefix : value }),
            ...getPCSSFile({ content : value }),
            ...getPJSMFile({ content : value }),
            ...packages(),
        });
    };
});
module.exports = Action;