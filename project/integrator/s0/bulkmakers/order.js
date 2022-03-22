const {
    getRandomNumber,
} = require('../utils');
const getBulkmaker = (object) => {
    const result = [];
    for (let i = 0; i < object['number']; i++) {
        result.push({
            fk_public : getRandomNumber({
                minimum : 1,
                maximum : 10,
            }),
        });
    };
    return result;
}
module.exports = getBulkmaker({
    number : 10,
});