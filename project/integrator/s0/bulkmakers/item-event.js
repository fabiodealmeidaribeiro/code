const {
    getDOCNumber,
    getForeignKey,
    getLoremIpsum,
    getRandomIndex,
    getRandomNumber,
} = require('../utils');
const getBulkmaker = (object) => {
    const result = [];
    for (let i = 0; i < object['number']; i++) {
        const startDate = new Date();
        startDate.toLocaleString("en-US", {
            timeZone : 'America/Sao_Paulo',
        });
        startDate.setMonth(getRandomNumber({
            minimum : new Date().getMonth(),
            maximum : 11,
        }));
        startDate.setDate(getRandomNumber({
            minimum : 1,
            maximum : 31,
        }));
        startDate.setHours(0, 0, 0);
        const endDate = new Date();
        endDate.toLocaleString("en-US", {
            timeZone : 'America/Sao_Paulo',
        });
        endDate.setMonth(getRandomNumber({
            minimum : startDate.getMonth(),
            maximum : 11,
        }));
        endDate.setDate(getRandomNumber({
            minimum : 1,
            maximum : 31,
        }));
        endDate.setHours(0, 0, 0);
        const startTime = new Date();
        startTime.setHours(
            getRandomNumber({
                minimum : 1,
                maximum : 23,
            }),
            getRandomNumber({
                minimum : 1,
                maximum : 60,
            }),
            getRandomNumber({
                minimum : 1,
                maximum : 60,
            }),
        );
        const endTime = new Date();
        endTime.setHours(
            getRandomNumber({
                minimum : startTime.getHours(),
                maximum : 23,
            }),
            getRandomNumber({
                minimum : 1,
                maximum : 60,
            }),
            getRandomNumber({
                minimum : 1,
                maximum : 60,
            })
        );
        result.push({
            ...getForeignKey(),
            ...getLoremIpsum(),
            cost : getRandomNumber({
                minimum : 100,
                maximum : 999,
            }),
            startdate : startDate,
            enddate : endDate,
            starttime : startTime,
            endtime : endTime,
            cep : getDOCNumber([5, 3]),
            number : getRandomNumber({
                minimum : 1,
                maximum : 999,
            }),
            state : getRandomIndex({
                array : 'uf',
            }),
        });
    };
    return result;
}
module.exports = getBulkmaker({
    number : 10,
});