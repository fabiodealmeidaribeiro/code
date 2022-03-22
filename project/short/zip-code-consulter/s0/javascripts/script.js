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

let pageTitle = 'zip code consulter';
getSelector('title').appendChild(createNode(getFirstUpperCase(pageTitle)));

h = createElement('h1');
h.appendChild(createNode(getFirstUpperCase(pageTitle)));
getID('container').appendChild(h);

let items = [
    { title : 'cep', maxlength : '9' },
    { title : 'logradouro' },
    { title : 'bairro' },
    { title : 'localidade' },
    { title : 'uf' },
];

for (let i = 0; i < items['length']; i++) {
    let ID  = i + 1;
    let itemName = items[i]['title'];
    itemName = itemName.replace(' ', '-');
    itemName = itemName.toLowerCase();
    let labelTitle = items[i]['title'];
    labelTitle += ':';
    labelTitle = getFirstUpperCase(labelTitle);
    div = createElement('div');
    setAttribute({ element: div, attribute: 'id', value: 'form-group-' + ID, });
    label = createElement('label');
    label.appendChild(createNode(labelTitle));
    setAttribute({ element: label, attribute: 'for', value: itemName, });
    input = createElement('input');
    setAttribute({ element: input, attribute: 'type', value: 'text', });
    getValidation(items[i]['maxlength']) ? setAttribute({ element: input, attribute: 'maxlength', value: items[i]['maxlength'], }) : undefined;
    setAttribute({ element: input, attribute: 'id', value: itemName, });
    getID('container').appendChild(div).appendChild(label);
    div.appendChild(input);
};

addRemoveClasses({
    elements: [
        '#container',
    ],
    classes: [
        'container',
    ],
    method: 'add',
});

for (let i = 1; i < 6; i++) {
    addRemoveClasses({
        elements: [
            'h' + i,
        ],
        classes: [
            'm-0',
            'p-0',
        ],
        method: 'add',
    });
};

for (let i = 0; i < items['length']; i++) {
    let ID  = i + 1;
    addRemoveClasses({
        elements: [
            '#form-group-' + ID,
        ],
        classes: [
            'form-group',
        ],
        method: 'add',
    });
};

addRemoveClasses({
    elements: [
        'input',
    ],
    classes: [
        'form-control',
        'mb-3',
    ],
    method: 'add',
});

getSelector('#cep').addEventListener('blur', () => {
    fetch(`https://viacep.com.br/ws/${ cep['value'].replace('-', '') }/json`, {
        method : 'GET',
        mode : 'cors',
        cache : 'default',
    }).then((result) => {
        return result.json().then((result) => {
            for (const index in result) {
                if (getSelector('#' + index)) {
                    getSelector('#' + index)['value'] = result[index];
                }
            }
        }).catch((result) => {
            console.log(result);
        });
    }).catch((result) => {
        console.log(result);
    });
});