import {
    containerPalette,
} from './main.js';

containerPalette({
    lineNumber : 10,
    columnNumber : 4,
    childElement : 'div',
    fatherElement : '#content',
    styleList : [
        [ 'color', '#FFF' ],
        [ 'height', 100 + 'px' ],
    ],
});