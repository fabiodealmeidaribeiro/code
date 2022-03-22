let getTag = (element) => { return window.document.getElementsByTagName(element); };
let getSelector = (element) => { return window.document.querySelector(element); };
let getSelectors = (element) => { return window.document.querySelectorAll(element); };
let getName = (element) => { return window.document.getElementsByName(element); };
let getClass = (element) => { return window.document.getElementsByClassName(element); };
let getID = (element) => { return window.document.getElementById(element); };

let createElement = (element) => { return window.document.createElement(element); };
let createNode = (element) => { return window.document.createTextNode(element); };
let createAttribute = (element) => { return window.document.createAttribute(element); };

let isThis = (string, type) => { return typeof string === type; };

let getValidation = (content) => {
    if (!content) return false;
    else if (isThis(content, 'undefined')) return false;
    else return true;
};

let addRemoveClasses = (object) => {
    for (let x = 0; x < object['elements']['length']; x++)
        for (let y = 0; y < getSelectors(object['elements'][x])['length']; y++)
            for (let z = 0; z < object['classes']['length']; z++)
                getSelectors(object['elements'][x])[y]['classList'][object['method']](object['classes'][z]);
};

let getFirstUpperCase = (content) => {
    let result = '';
    result += (content).charAt(0).toUpperCase();
    result += (content).slice(1);
    return result;
};

let setAttribute = (object) => {
    attribute = createAttribute(object['attribute']);
    if (isThis(object['value'], 'string')) {
        attribute['value'] = object['value'];
    } else if (isThis(object['value'], 'object')) {
        attribute['value'] = '';
        for (let i = 0; i < object['value']['length']; i++) {
            attribute['value'] += object['value'][i];
            attribute['value'] += i <= object['value']['length'] ? ' ' : '';
        }
    }
    object['element'].setAttributeNode(attribute);
};

let n = 4;

for (let i = 1; i <= n; i++) {
    col = createElement('div');
    setAttribute({ element: col, attribute: 'id', value: 'col-' + i, });
    container = createElement('div');
    setAttribute({ element: container, attribute: 'id', value: 'container-' + i, });
    h = createElement('h5');
    h.appendChild(createNode(getFirstUpperCase('bla')));
    content = createElement('div');
    setAttribute({ element: content, attribute: 'id', value: 'content-' + i, });
    getSelector('footer').appendChild(col).appendChild(container).appendChild(h);
    getSelector('footer').appendChild(col).appendChild(container).appendChild(content);
}

addRemoveClasses({
    elements: [
        'body',
    ],
    classes: [
        'bg-dark',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        'footer',
        'header',
    ],
    classes: [
        'bg-light',
        'text-dark',
        'py-3',
        'ps-3',
    ],
    method: 'add',
});

for (let i = 1; i < 6; i++) {
    addRemoveClasses({
        elements: [
            'h' + i,
        ],
        classes: [
            'display-' + i,
            'm-0',
            'p-0',
        ],
        method: 'add',
    });
};

for (let i = 1; i <= n; i++) {
    addRemoveClasses({
        elements: [
            '#col-' + i,
        ],
        classes: [
            'col-4',
            'pe-3',
        ],
        method: 'add',
    });
    addRemoveClasses({
        elements: [
            '#container-' + i,
        ],
        classes: [
            'bg-white',
            'h-100',
            'p-3',
            'rounded',
            'shadow-sm',
            'w-100',
        ],
        method: 'add',
    });
};