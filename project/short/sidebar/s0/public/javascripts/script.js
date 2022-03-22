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

const sidebar = window.document.querySelectorAll('#list');
sidebar.forEach((item) => {
    item.addEventListener('click', function () {
        sidebar.forEach((item) => { item.classList.remove('active'); });
        this.classList.add('active');
    });
});