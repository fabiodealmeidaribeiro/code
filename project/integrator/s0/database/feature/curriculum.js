const profession = require('../option')['profession'];
const salary = require('../option')['salary'];
const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : 'profession',
            note        : '',
            option      : profession,
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
            name        : 'curriculum',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 5,
            type        : 'textarea',
            value       : '',
        },
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : 'salary',
            note        : '',
            option      : salary,
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'select',
            value       : '',
        },
    ];
};