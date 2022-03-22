const {
    jsonFileReader,
} = require('../utils');

const cors = require('cors');
const express = require('express');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended : false,
}));

app.use(require('../routes'));

// const PORT = process.env.PORT || 8080;
const PORT = jsonFileReader(['.', 'config', 'index.json'])['development']['port'] || 3333;

require('http').createServer(app).listen(PORT, () => {
    console.log(`Server running on \'${ PORT }\' port [...].`);
});