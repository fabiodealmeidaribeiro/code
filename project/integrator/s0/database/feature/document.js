const cnh = require('../option')['lengths']['cnh'];
const cpf = require('../option')['lengths']['cpf'];
const passport = require('../option')['lengths']['passport'];
const rg = require('../option')['lengths']['rg'];
const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : cnh,
            name        : 'cnh',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'text',
            value       : '',
        },
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : cpf,
            name        : 'cpf',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'text',
            value       : '',
        },
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : passport,
            name        : 'passport',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'text',
            value       : '',
        },
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : rg,
            name        : 'rg',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'text',
            value       : '',
        },
    ];
};