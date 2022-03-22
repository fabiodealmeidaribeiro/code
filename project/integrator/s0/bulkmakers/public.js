let {
    getCNPJNumber,
    getCPFNumber,
    getDOCNumber,
    getHash,
    getLoremIpsum,
    getPhoneNumber,
    getPublicList,
    getRandomDate,
    getRandomIndex,
    getRandomNumber,
} = require('../utils');
const getBulkmaker = (object) => {
    const result = [];
    for (let i = 0; i < object['array']['length']; i++) {
        let title = object['array'][i]['first'];
        title += ' ';
        title += object['array'][i]['last'];
        let email = object['array'][i]['first'].substr(0, 1).toLowerCase();
        email += object['array'][i]['last'].substr(0, 1).toLowerCase();
        let password = getRandomNumber({
            minimum : 100000,
            maximum : 999999,
        });
        email += password;
        password = getHash(password);
        email += '@';
        email += getRandomIndex({
            array : 'email',
        });
        email += '.com';
        const isBirthDate = getRandomDate({
            start : new Date().setFullYear(new Date().getFullYear() - 100),
            end : new Date(),
        });
        isBirthDate.toLocaleString("en-US", {
            timeZone : 'America/Sao_Paulo',
        });
        isBirthDate.setHours(0, 0, 0);
        result.push({
            title : title,
            gender : object['array'][i]['gender'],
            description : getLoremIpsum()['description'],
            birthdate : isBirthDate,
            status : getRandomIndex({
                array : 'status',
            }),
            cpf : getCPFNumber(),
            rg : getDOCNumber([2, 3, 3, 1]),
            cep : getDOCNumber([5, 3]),
            state : getRandomIndex({
                array : 'uf',
            }),
            email : email,
            phone : getPhoneNumber([2, 1, 4, 4]),
            cnpj : getCNPJNumber([2, 3, 3, 4, 2]),
            profession : getRandomIndex({
                array : 'profession',
            }),
            curriculum : getLoremIpsum()['description'],
            salary : getRandomIndex({
                array : 'salary',
            }),
            accesskey : email,
            password : password,
            confirmation : password,
        });
    };
    return result;
}
module.exports = getBulkmaker({
    array : getPublicList()
});