const active = true, label = true, placeholder = false, required = false;
module.exports = (disabled) => {
    return [
        {
            active      : active,
            disabled    : true,
            label       : label,
            maxlength   : '',
            name        : [ 'createdAt', 'created' ],
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
            disabled    : true,
            label       : label,
            maxlength   : '',
            name        : [ 'updatedAt', 'updated' ],
            note        : '',
            option      : '',
            placeholder : placeholder,
            required    : required,
            rows        : 0,
            type        : 'date',
            value       : '',
        },
    ];
};