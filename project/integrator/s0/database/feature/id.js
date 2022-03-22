const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : true,
            label       : label,
            maxlength   : '',
            name        : 'id',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'number',
            value       : '',
        },
    ];
};