const { Op } = require("sequelize");
const { Public } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    getFirstUpperCase,
    jsonFileReader,
} = require('../utils');
const first = [
    ...jsonFileReader([ 'database', 'men.json' ]),
    ...jsonFileReader([ 'database', 'women.json' ]),
];
const last = [ ...jsonFileReader([ 'database', 'last-name.json' ]), ];
const emails = [ ...jsonFileReader([ 'database', 'email.json' ]), ];
const public = [];
for (let i = 0; i < first['length']; i++) {
    public.push({
        'first-name' : first[i],
        'last-name' : last[Math.floor(Math.random() * last['length'])],
    });
};
const bulkList = [];
for (let i = 0; i < public['length']; i++) {
    let email = public[i]['first-name'].substr(0, 1);
    email += public[i]['last-name'].substr(0, 1);
    let password = Math.floor(Math.random() * 999999 + 100000);
    email += password;
    email += '@';
    email += emails[Math.floor(Math.random() * emails['length'])];
    email += '.com';
    bulkList.push({
        'first-name' : getFirstUpperCase(public[i]['first-name']),
        'last-name' : getFirstUpperCase(public[i]['last-name']),
        email : String(email).toLowerCase(),
        password : bcrypt.hashSync(String(password), 10),
    });
};
const action = {
    index : async (req, res, next) => {
        return res.redirect('/public/all');
    },
    all : async (req, res, next) => {
        const { key, disable, } = req['query'];
        const items = [ 'first-name', 'last-name' ];
        // http://localhost:8080/public/all?key=ana&disable=1
        const list = [];
        for (let i = 0; i < items['length']; i++)
            list.push({
                [items[i]] : {
                    [Op.like] : `%${ key }%`,
                },
            });
        const { count, rows } = await Public.findAndCountAll({
            where : {
                ...key ? { [ Op.or ] : list } : undefined,
                ...disable ? { disable : disable } : undefined,
            }
        }).then(result => {
            return res.status(200).json(result['rows']);
        }).catch(error => {
            return res.status(400).json(error);
        });
    },
    one : async (req, res, next) => {
        const { id } = req['params'];
        if (!id) { return res.redirect('/public/all'); } else {
            const index = await Public.findByPk(id).then(result => {
                return res.status(200).json(result);
            }).catch(error => {
                return res.status(400).json(error);
            });
        };
    },
    store : async (req, res, next) => {
        try {
            const index = await Public.create({
                ...req['body'],
            });
            return res.status(201).json(index);
        } catch (error) {
            return res.status(400).json(error);
        };
    },
    update : async (req, res, next) => {
        try {
            const { id } = req['params'];
            const {
                firstName,
                lastName,
                email,
            } = req['body'];
            const index = await Public.findByPk(id);
            if (!index) {
                return res.status(200).json({
                    message : 'the index ' + id + ' is not found.',
                });
            } else {
                index.update({
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                });
                return res.status(200).json(index);
            }
        } catch (error) {
            return res.status(400).json(error);
        };
    },
    disable : async (req, res, next) => {
        try {
            const { id } = req['params'];
            const index = await Public.findByPk(id);
            if (!index) {
                return res.status(200).json({
                    message : 'the index ' + id + ' is not found.',
                });
            } else {
                index.update({
                    disable : true,
                });
                return res.status(200).json(index);
            };
        } catch (error) {
            return res.status(400).json(error);
        };
    },
    destroy : async (req, res, next) => {
        try {
            const { id } = req['params'];
            const index = await Public.findByPk(id);
            if (!index) {
                return res.status(200).json({
                    message : 'the index ' + id + ' is not found.',
                });
            } else {
                index.destroy();
                return res.status(200).json({
                    message : 'the index ' + id + ' was destroyed.',
                });
            };
        } catch (error) {
            return res.status(400).json(error);
        };
    },
    authenticate : async (req, res, next) => {
        const { email, password, } = req['body'];
        const index = await Public.findOne({
            where : {
                email : email,
            },
        });
        if (!index) {
            return res.status(400).json({
                error : 'Index not found!',
            });
        };
        if (!await bcrypt.compareSync(password, index['password'])) {
            return res.status(400).json({
                error : 'Invalid password!',
            });
        };
        index['password'] = undefined;
        const token = jwt.sign({
            email : index['email'],
        }, authConfig['secret'], {
            expiresIn : authConfig['expiresIn'],
        });
        return res.status(200).json({
            user : index,
            token : token,
        });
    },
    authenticated : async (req, res, next) => {
        const index = await Public.findOne({
            where : {
                email : req['userEmail'],
            },
        }).then(result => {
            result['password'] = undefined;
            return res.status(200).json({
                user : result,
            });
        }).catch(error => {
            return res.status(400).json(error);
        });
    },
    bulk : async (req, res, next) => {
        const index = await Public.bulkCreate(bulkList);
        return res.send(index);
    },
}
module.exports = action;