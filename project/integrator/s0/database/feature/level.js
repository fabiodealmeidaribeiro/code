const level = require('../option')['level'];
const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : 'level',
            note        : '',
            option      : level,
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'select',
            value       : '',
        },
    ];
};