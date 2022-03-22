import {
    addRemoveClasses,
    getCEPCheck,
    getCNPJMask,
    getFormErrorList,
    getFieldValidator,
    getValidation,
} from './main.js';

export let itemsClasses = (object) => {
    let firstColor = '-' + (getValidation(object['firstColor']) ? object['firstColor'] : 'light');
    let secondColor = '-' + (getValidation(object['secondColor']) ? object['secondColor'] : 'dark'); 
    let border = getValidation(object['border']) ? [ 'border', 'border' + secondColor ] : []; 
    addRemoveClasses({
        elementList : [
            '#first-item',
            '#second-item',
        ],
        classeList : [
            'mb-3',
            'p-3',
            'rounded-1',
            'shadow-sm',
            ...border,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#first-item',
        ],
        classeList : [
            'bg' + firstColor,
            'text' + secondColor,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#second-item',
        ],
        classeList : [
            'bg' + secondColor,
            'text' + firstColor,
        ],
        method : 'add',
    });
};

export let formClasses = () => {
    getCEPCheck({
        element : '#cep',
    });
    getCNPJMask({
        element : '#cnpj',
    });
    addRemoveClasses({
        elementList : [
            'input',
            'select',
            'textarea',
        ],
        classeList : [
            'form-control',
            'mb-3',
        ],
        method : 'add',
    });

    getFormErrorList({
        messageTarget : '#error-list',
    });
    addRemoveClasses({
        elementList : [
            '#error-list',
        ],
        classeList : [            
            'alert-light',
            'alert',
            'border-secondary',
            'border',
            'mb-3',
            'rounded-1',
            'shadow-sm',
        ],
        method : 'add',
    });

    getFieldValidator({
        messageTarget : '#alert',
    });
    addRemoveClasses({
        elementList : [
            '#alert',
        ],
        classeList : [
            'alert-danger',
            'alert',
            'mb-3',
        ],
        method : 'add',
    });
};

export let paginationClasses = (object) => {
    let position = getValidation(object['position'])
    ? object['position'] : 'center';
    addRemoveClasses({
        elementList : [
            'nav#pagination',
        ],
        classeList : [
            'd-flex',
            'justify-content-' + position,
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            'nav#pagination ul',
        ],
        classeList : [
            'align-self-' + position,
            'pagination',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            'nav#pagination ul',
        ],
        classeList : [
            'ps-3',
        ],
        method : 'remove',
    });
    addRemoveClasses({
        elementList : [
            'nav#pagination ul li',
        ],
        classeList : [
            'page-item',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            'nav#pagination ul li a',
        ],
        classeList : [
            'page-link',
        ],
        method : 'add',
    });
};

export let navbarClasses = () => {
    addRemoveClasses({
        elementList : [
            'nav#navbar',
        ],
        classeList : [
            'bg-white',
            'container-fluid',
            'mb-3',
            'navbar-expand-lg',
            'navbar-light',
            'navbar',
            'p-3',
            'rounded',
            'shadow-sm',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#search-form',
        ],
        classeList : [
            'd-flex',
        ],
        method : 'add',
    });
};

export let titleClasses = () => {
    for (let i = 1; i < 6; i++) {
        addRemoveClasses({
            elementList : [
                'h' + i,
            ],
            classeList : [
                'display-' + i,
            ],
            method : 'add',
        });
    };
};