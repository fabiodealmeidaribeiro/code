const {
    getForeignKey,
    getLoremIpsum,
} = require('../utils');
const getBulkmaker = (object) => {
    const result = [];
    for (let i = 0; i < object['number']; i++) {
        result.push({
            ...getForeignKey('category'),
            ...getLoremIpsum(),
        });
    };
    return result;
}
module.exports = getBulkmaker({
    number : 10,
});