const fs = require('fs');
const urlJoin = require('url-join');
const path = require('path');

const { 
    check,
    validationResult,
    body,
} = require('express-validator');

let {
    addJsDatabase,
    addJsonDatabase,
    isThis,
    jsonFileReader,
} = require('../utils');

const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        let filePath = urlJoin([
            'public',
            'images',
        ]);
        cb(null, filePath);
    },
    filename : (req, file, cb) => {
        let fileName = '';
        // fileName += file['fieldname'];
        // fileName += '-';
        fileName += Date.now();
        fileName += path.extname(file['originalname']);
        cb(null, fileName);
    },
});

const middlewares = {
    authenticate : (req, res, next) => {
        if (isThis(req['session']['user'], 'undefined')) {
            return res.send('you need to be logged!');
        } else {
            return next();
        }
    },
    cookie : (req, res, next) => {
        if (req['cookies']['accesskey'] != undefined && req['session']['user'] == undefined) {
            let userData = jsonFileReader([ 'database', 'text', 'client.json' ])[0];
            if (userData['accesskey'] == req['cookies']['accesskey'])
                req['session']['user'] = userData;
        }
        return next();
    },
    report : (req, res, next) => {
        const newPush = {
            attachment : {
                date : new Date().toISOString(),
                url : req['url'],
            },
            require : [
                'database',
                'log',
            ],
            title : 'report',
        };
        // addJsDatabase({
        //     ...newPush,
        // });
        // addJsonDatabase({
        //     ...newPush,
        // });
        next();
    },
    upload : multer({
        storage : storage,
    }),
    validator : (req, res, next) => {
        return [
            check('name').isInt({
                min : 3,
                max : 99,
            }).withMessage('name field error!'),
            check('email').isEmail().withMessage('email field error!'),
            body('email').custom((email) => {
                const index = JSON.parse(fs.readFileSync(urlJoin([
                    'database',
                    'text',
                    'client.json',
                ])));
                for (let i = 0; i < index['length']; i++)
                    return index[i]['email'] !== email;
            }).withMessage('email already registered!'),
            check('password').isLength({
                min : 6,
            }).withMessage('password field error!'),
            check('password').isEmpty().withMessage('password field is empty!'),
        ];
    },
};
module.exports = middlewares;