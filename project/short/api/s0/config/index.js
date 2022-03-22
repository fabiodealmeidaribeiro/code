require('dotenv').config();
module.exports = {
    database : process.env.DB_DATABASE,
    dialect : process.env.DB_CONNECTION,
    host : process.env.DB_HOST,
    password : process.env.DB_PASSWORD,
    username : process.env.DB_USERNAME,
    // port : process.env.DB_PORT,
    operatorAliases : false,
    define : {
        timestamp : true,
        underscored : false,
        underscoredAll : false,
    },
};