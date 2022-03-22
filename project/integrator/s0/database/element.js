const {
    isTheLast,
} = require('../utils');
const getFormElements = (object) => {
    const result = [];
    for (let i = 0; i < object['array']['length']; i++) {
        const index = object['array'][i];
        const nameTitle = isTheLast(index, '?') ? '' : index;
        const requirePath = './feature/' + (isTheLast(index, '?') ? index.substr(0, index['length'] - 1) : index);
        result.push({
            active : true,
            disabled : object['disabled'],
            label : true,
            maxlength : '',
            name : '',
            note : 'deleted',
            option : '',
            placeholder : false,
            required : false,
            rows : 0,
            type : 'start',
            value : '',
        });
        result.push({
            active : true,
            disabled : object['disabled'],
            label : true,
            maxlength : '',
            name : nameTitle,
            note : 'deleted',
            option : '',
            placeholder : false,
            required : false,
            rows : 0,
            type : 'h6',
            value : '',
        });
        result.push(...require(requirePath)(object['disabled']));
        result.push({
            active : true,
            disabled : object['disabled'],
            label : true,
            maxlength : '',
            name : '',
            note : 'deleted',
            option : '',
            placeholder : false,
            required : false,
            rows : 0,
            type : 'end',
            value : '',
        });
    };
    return result;
};
module.exports = {
    public : {
        create : getFormElements({
            array : [
                // 'id',
                'profile',
                'add?',
                'picture?',
                'document',
                'address',
                'contact',
                'curriculum',
                'company',
                'access',
                // 'state',
                // 'level',
                // 'create',
            ],
            disabled : false,
        }),
        edit : getFormElements({
            array : [
                // 'id',
                'profile',
                'add',
                'picture?',
                'document',
                'address',
                'contact',
                'curriculum',
                'company',
                'access',
                'state',
                'level',
                // 'create',
            ],
            disabled : false,
        }),
        login : getFormElements({
            array : [
                'login?',
            ],
            disabled : false,
        }),
        view : getFormElements({
            array : [
                'id?',
                'profile',
                'add?',
                'picture',
                'document',
                'address',
                'contact',
                'curriculum',
                'company',
                'access',
                'state',
                'level',
                'create',
            ],
            disabled : true,
        }),
    },
    category : {
        create : getFormElements({
            array : [
                // 'id',
                'profile',
                'picture',
                // 'state',
                // 'create',
            ],
            disabled : false,
        }),
        edit : getFormElements({
            array : [
                // 'id',
                'profile',
                'picture',
                'state',
                // 'create',
            ],
            disabled : false,
        }),
        view : getFormElements({
            array : [
                'id',
                'profile',
                'picture',
                'state',
                'create',
            ],
            disabled : true,
        }),
    },
    event : {
        create : getFormElements({
            array : [
                // 'id',
                'profile',
                'picture',
                'cost',
                'date',
                'address',
                // 'state',
                // 'create',
            ],
            disabled : false,
        }),
        edit : getFormElements({
            array : [
                // 'id',
                'profile',
                'picture',
                'cost',
                'date',
                'address',
                'state',
                // 'create',
            ],
            disabled : false,
        }),
        view : getFormElements({
            array : [
                'id',
                'profile',
                'picture',
                'cost',
                'date',
                'address',
                'state',
                'create',
            ],
            disabled : true,
        }),
    },
    product : {
        create : getFormElements({
            array : [
                // 'id',
                'profile',
                'picture',
                'cost',
                // 'state',
                // 'create',
            ],
            disabled : false,
        }),
        edit : getFormElements({
            array : [
                // 'id',
                'profile',
                'picture',
                'cost',
                'state',
                // 'create',
            ],
            disabled : false,
        }),
        view : getFormElements({
            array : [
                'id?',
                'profile',
                'picture',
                'cost',
                'state',
                'create',
            ],
            disabled : true,
        }),
    },
    service : {
        create : getFormElements({
            array : [
                // 'id?',
                'profile',
                'picture',
                'cost',
                // 'state',
                // 'create',
            ],
            disabled : false,
        }),
        edit : getFormElements({
            array : [
                // 'id',
                'profile',
                'picture',
                'cost',
                'state',
                // 'create',
            ],
            disabled : false,
        }),
        view : getFormElements({
            array : [
                'id',
                'profile',
                'picture',
                'cost',
                'state',
                'create',
            ],
            disabled : true,
        }),
    },
    _j : {
        sendEmail : getFormElements({
            array : [
                'profile',
            ],
            disabled : false,
        }),
    },
};