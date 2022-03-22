const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : 'cost',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : '',
            type        : 'number',
            value       : '',
        },
    ];
};