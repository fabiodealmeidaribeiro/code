import {
    formClasses,
} from './classes.js';

formClasses();

import {
    getFieldEvent,
} from './main.js';

getFieldEvent({
    color : '#000',
    background : '#FFF',
    elementList : [
        '.form-control',
    ],
});