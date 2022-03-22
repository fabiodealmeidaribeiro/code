const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : disabled,
            label       : label,
            maxlength   : '',
            name        : 'title',
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
            maxlength   : '',
            name        : 'description',
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 5,
            type        : 'textarea',
            value       : '',
        },
    ];
};