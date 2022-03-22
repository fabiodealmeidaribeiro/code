import {
    getLang,
    createNewElement,
} from './main.js';
let getStorage = (object) => {
    let message;
    if (getLang() === 'pt-BR') message = 'Olá,';
    else if (getLang() === 'en') message = 'Hello,';
    let variable = prompt('Your ' + object['childElementID'] + '!');
    createNewElement({
        elementAriaLabel : '',
        elementAriaDescribedby : '',
        elementClasses : [
            'd-flex',
            'justify-content-center',
            'p-3',
        ],
        elementContent : '',
        childElement : 'div',
        fatherElement : object['fatherElement'],
        elementID : 'wrap',
        elementName : '',
        elementPlaceholder : '',
        elementStyle : [
        ],
        elementType : '',
    });
    createNewElement({
        elementAriaLabel : '',
        elementAriaDescribedby : '',
        elementClasses : [
        ],
        elementContent : variable ? message.trim() + ' ' + variable.trim() + '!' : 'You need to type a name!',
        childElement : object['childElement'],
        fatherElement : '#wrap',
        elementID : '',
        elementName : '',
        elementPlaceholder : '',
        elementStyle : [
        ],
        elementType : '',
    });
    object['typeStorage'].setItem(object['elementName'], variable);
};

getStorage({
    childElement : 'h1',
    fatherElement : '#content',
    typeStorage : localStorage,
    // typeStorage : sessionStorage,
});

// localStorage.removeItem('#name');
// localStorage.clear();

// sessionStorage.removeItem('#name');
// sessionStorage.clear();