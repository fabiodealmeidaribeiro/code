import {
    navbarClasses,
} from './classes.js';

navbarClasses();

import {
    titleClasses,
} from './classes.js';

titleClasses();

import {
    itemsClasses,
} from './classes.js';

itemsClasses({
    firstColor : 'light',
    secondColor : 'dark',
});

import {
    getSignature,
} from './main.js';

getSignature({
    element : 'signature',
    name : 'laranja dev br',
    email : 'far820320@gmail.com',
    phone : '+55 (11) 9 4005 8153',
});

import {
    getTimer,
} from './main.js';

getTimer({
    element : 'timer',
    number : 1,
    seconds : 1,
});

import {
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        'body',
        'html',
    ],
    classeList : [
        'bg-light',
        'w-100',
        'h-100',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'body',
    ],
    classeList : [
        'd-flex',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#container',
    ],
    classeList : [
        // 'container',
        'mx-3',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#content'
    ],
    classeList : [
        'bg-white',
        'mb-3',
        'pt-3',
        'px-3',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#content>#row',
    ],
    classeList : [
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#content>#col',
    ],
    classeList : [
        'col',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'footer'
    ],
    classeList : [
        'mb-3',
        'text-center',
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

window.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox({
        elements : 'a.light-box',
    });
});

window.document.querySelectorAll('#sidebar-list').forEach((item) => {
    item.addEventListener('click', function () {
        window.document.querySelectorAll('#sidebar-list').forEach((item) => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});