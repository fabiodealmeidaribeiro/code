const fs = require('fs');
const urlJoin = require('url-join');

const getFirstUpperCase = (content) => {
    let result = '';
    result += String(content).charAt(0).toUpperCase();
    result += String(content).slice(1);
    return result;
};

const isTheLast = (string, letter) => {
    return string.substr(string['length'] - 1, string['length']) === letter;
};

const getPlural = (content) => {
    if (isTheLast(content, 'y')) content = content.substr(0, content['length'] - 1) + 'ies';
    else if (isTheLast(content, 's')) content += 'es';
    else content += 's';
    return content.trim().toLowerCase();
};

const isThere = (array) => {
    return fs.existsSync(urlJoin(array));
};

const jsonFileReader = (array) => {
    return isThere(array) ? JSON.parse(fs.readFileSync(urlJoin(array), { encoding : 'utf-8' })) : [];
};

const getModelPublic = (Sequelize) => {
    return {
        id : {
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
            type : Sequelize.INTEGER,
        },
        'first-name' : {
            allowNull : false,
            type : Sequelize.STRING,
        },
        'last-name' : {
            allowNull : false,
            type : Sequelize.STRING,
        },
        email : {
            allowNull : false,
            type : Sequelize.STRING,
            validate : {
                isEmail : true,
            },
        },
        password : {
            allowNull : false,
            defaultValue : '',
            type : Sequelize.STRING,
            validate : {
                len : [ 8, 12 ],
            },
        },
        approved : {
            allowNull : false,
            defaultValue : false,
            type : Sequelize.BOOLEAN,
        },
        deleted : {
            allowNull : false,
            defaultValue : false,
            type : Sequelize.BOOLEAN,
        },
        disable : {
            allowNull : false,
            defaultValue : false,
            type : Sequelize.BOOLEAN,
        },
        createdAt : {
            allowNull : true,
            defaultValue: Sequelize.NOW,
            type : Sequelize.DATE,
        },
        updatedAt : {
            allowNull : true,
            defaultValue: Sequelize.NOW,
            type : Sequelize.DATE,
        },
    };
};

module.exports = {
	getPlural,
    getModelPublic,
    getFirstUpperCase,
    jsonFileReader,
};