import {
    addRemoveClasses,
    getFormErrorList,
} from './main.js';

addRemoveClasses({
    elementList : [
        'label'
    ],
    classeList : [
        'form-label',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'input',
        'textarea',
        'select',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'input',
        'textarea',
    ],
    classeList : [
        'form-control',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'select',
    ],
    classeList : [
        'form-select',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#error-list',
    ],
    classeList : [
        'alert',
        'alert-danger',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'button',
    ],
    classeList : [
        'btn',
        'btn-outline-dark',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#footer-menu',
    ],
    classeList : [
        'on-the-right',
        'pb-3',
    ],
    method : 'add',
});

getFormErrorList({
    messageTarget : '#error-list',
});