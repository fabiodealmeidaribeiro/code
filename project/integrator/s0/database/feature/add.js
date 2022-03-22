const generous = require('../option')['generous'];
const status = require('../option')['status'];
const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : [ 'birthdate', 'birth date' ],
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'date',
            value       : '',
        },
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : 'generous',
            note        : '',
            option      : generous,
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'select',
            value       : '',
        },
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : 'status',
            note        : '',
            option      : status,
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'select',
            value       : '',
        },
    ];
};