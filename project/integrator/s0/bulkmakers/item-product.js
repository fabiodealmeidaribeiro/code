const {
    getForeignKey,
    getLoremIpsum,
    getRandomNumber,
} = require('../utils');
const getBulkmaker = (object) => {
    const result = [];
    for (let i = 0; i < object['number']; i++) {
        result.push({
            ...getForeignKey(),
            ...getLoremIpsum(),
            cost : getRandomNumber({
                minimum : 100,
                maximum : 999,
            }),
        });
    };
    return result;
}
module.exports = getBulkmaker({
    number : 10,
});