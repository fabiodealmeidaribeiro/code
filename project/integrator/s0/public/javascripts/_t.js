import {
    createNewElement,
    colorGenerator,
} from './main.js';

let description = '';
const number = 1, title = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
for (let i = 0; i < number; i++) {
    description += 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' + ' ';
    description += 'Tempora, cumque voluptatum nemo commodi veniam iste saepe vitae odit amet quisquam totam!' + ' ';
    description += 'Est dolorum totam sequi officiis eaque consequatur optio necessitatibus!';
    description += i < number ? ' ' : '';
};

createNewElement({
    elementAriaLabel : '',
    elementAriaDescribedby : '',
    elementClasses : [
        'input-group',
        'mb-3',
    ],
    elementContent : '',
    childElement : 'div',
    fatherElement : '#content',
    elementID : 'wrap',
    elementName : '',
    elementPlaceholder : '',
    elementStyle : [
    ],
    elementType : '',
});

for (let i = 0; i < 2; i++) {
    createNewElement({
        elementAriaLabel : '',
        elementAriaDescribedby : '',
        elementClasses : [
            'mb-3',
            'p-3',
        ],
        elementContent : description,
        childElement : 'h1',
        fatherElement : '#wrap',
        elementID : '',
        elementName : '',
        elementPlaceholder : '',
        elementStyle : [
            [ 'backgroundColor', colorGenerator() ],
            [ 'color', colorGenerator() ],
        ],
        elementType : '',
    });
};