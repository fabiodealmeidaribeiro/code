export let getClass = (element) => { return window.document.getElementsByClassName(element); };
export let getID = (element) => { return window.document.getElementById(element); };
export let getName = (element) => { return window.document.getElementsByName(element); };
export let getSelector = (element) => { return window.document.querySelector(element); };
export let getSelectors = (element) => { return window.document.querySelectorAll(element); };
export let getTag = (element) => { return window.document.getElementsByTagName(element); };

export let createAttribute = (element) => { return window.document.createAttribute(element); };
export let createElement = (element) => { return window.document.createElement(element); };
export let createText = (element) => { return window.document.createTextNode(element); };

export let addRemoveClasses = (object) => {
    for (let x = 0; x < object['elements']['length']; x++) {
        for (let y = 0; y < getSelectors(object['elements'][x])['length']; y++) {
            for (let z = 0; z < object['classes']['length']; z++) {
                getSelectors(object['elements'][x])[y]['classList'][object['method']](object['classes'][z]);
            };
        };
    };
};



export let getFirstUpperCase = (content) => {
    let result = '';
    result += (content).charAt(0).toUpperCase();
    result += (content).slice(1);
    return result;
};

export let getValidation = (content) => {
    if (!content) return false;
    else if (isThis(content, 'undefined')) return false;
    else return true;
};

export let isThis = (string, type) => { return typeof string === type; };

export let setAttribute = (object) => {
    let attribute = createAttribute(object['attribute']);
    if (isThis(object['value'], 'string')) {
        attribute['value'] = object['value'];
    } else if (isThis(object['value'], 'object')) {
        for (let i = 0; i < object['value']['length']; i++) {
            attribute['value'] += !i ? '' : ' ';
            attribute['value'] += object['value'][i];
        }
    }
    object['element'].setAttributeNode(attribute);
};