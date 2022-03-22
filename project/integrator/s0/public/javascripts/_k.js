import {
    fetchAPIImage,
} from './main.js';

fetchAPIImage({
    columnNumber : 5,
    APIPath : 'https://api.thecatapi.com/v1/images/search?category_ids=4&limit=100',
    childElement : 'div',
    fatherElement : '#content',
    styleList : [
        [ 'backgroundSize', 'cover' ],
        [ 'height', 200 + 'px' ],
    ],
});