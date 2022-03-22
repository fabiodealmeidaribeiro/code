const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const fs = require('fs');
const urlJoin = require('url-join');

const getTrim = (content) => {
    return String(content).trim();
};

const isThis = (string, type) => {
    return typeof string === type;
};

const isEmpty = (object) => {
    if (object == null)
        return true;
    if (object['length'] > 0)
        return false;
    if (object['length'] === 0)
        return true;
    for (let key in object)
        if (Object.prototype.hasOwnProperty.call(object, key))
            return false;
    return true;
};

const getValidation = (content) => {
    if (!String(content))
        return false;
    else if (!content)
        return false;
    else if (isThis(content, 'undefined'))
        return false;
    else if (isThis(content, 'object') && isEmpty(content))
        return false;
    else
        return true;
};

const btnClasses = [
    'btn-outline-dark',
    'btn',
];

const footerQuickMenu = (object) => {
    let result = '';
    let isContainer = '';
    for (let i = 0; i < object['array']['length']; i++) {
        let isHREF = '';
        isHREF += '/' + object['pathPrefix'];
        isHREF += '/' + (isThis(object['array'][i]['title'], 'object') ? object['array'][i]['title'][0] : object['array'][i]['title']);
        isHREF += '/' + object['index'];
        isHREF = getValidation(object['array'][i]['path']) ? isHREF : '#';
        isHREF = isHREF.toLowerCase();
        let isTitle = isThis(object['array'][i]['title'], 'string') ? object['array'][i]['title'] : object['array'][i]['title'][1];
        let isTarget = getValidation(object['array'][i]['target']) ? ' data-bs-toggle=\"modal\"' : '';
        let isToggle = getValidation(object['array'][i]['toggle']) ? ' data-bs-target=\"#modal-' + object['index'] + '\"' : '';
        isContainer += startTagName([
            {
                name : 'a',
                param : {
                    href : isHREF + '\"' + isTarget + isToggle,
                    class : [
                        ...btnClasses,
                    ],
                },
            },
        ]);
        isContainer += getContainer({
            container : {
                content : getFirstUpperCase(isTitle),
            },
        });
        isContainer += endTagName([ { name : 'a', }, ]);
    };
    result += getValidation(isContainer) ? setupQuickView({
        position : object['position'],
        container : isContainer,
    }) : '';
    return result;
};

const viewListGroup = (object) => {
    let result = '';
    let isQuickView = quickView({ object : object });
    for (let x = 0; x < object['array']['length']; x++) {
        result += isQuickView;
        result += getIntercalate({ index : x });
            result += getHeader({
                index : x,
                title : object['array'][x]['title'],
                description : object['array'][x]['description'],
                image : object['array'][x]['image'],
            });
            if (getValidation(object['array'][x]['items'])) {
                result += startTagName([
                    {
                        name : 'div',
                        param : {
                            id : 'body',
                        },
                    },
                ]);
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                class : [
                                    'row',
                                    'gx-3',
                                ],
                            },
                        },
                    ]);
                        for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                            result += startTagName([
                                {
                                    name : 'div',
                                    param : {
                                        class : [
                                            'col-lg-4',
                                            'col-sm-6',
                                            'mb-3',
                                        ],
                                    },
                                },
                            ]);
                                result += startTagName([ { name : 'div', param : { id : 'list-group', }, }, ]);
                                    result += startTagName([
                                        {
                                            name : 'div',
                                            param : {
                                                class : [
                                                    'list-group-item',
                                                    'list-group-item-action',
                                                    'flex-column',
                                                    'rounded',
                                                    'shadow-sm',
                                                    'p-3',
                                                ],
                                            },
                                        },
                                    ]);
                                        if (getValidation(object['array'][x]['items'][y]['title'])) {
                                            result += startTagName([ { name : 'h5' } ]);
                                            result += getContainer({
                                                container : {
                                                    content : object['array'][x]['items'][y]['title'],
                                                },
                                            });
                                            result += endTagName([ { name : 'h5' } ]);
                                        };
                                        result += boxThumbnail({
                                            title : object['array'][x]['items'][y]['title'],
                                            description : object['array'][x]['items'][y]['description'],
                                            image : object['array'][x]['items'][y]['image'],
                                        });
                                        if (getValidation(object['array'][x]['items'][y]['description'])) {
                                            result += startTagName([ { name : 'p', param : { class : [ 'mb-3' ], }, } ]);
                                            result += getContainer({
                                                container : {
                                                    content : object['array'][x]['items'][y]['description'],
                                                },
                                            });
                                            result += endTagName([ { name : 'p' } ]);
                                        };
                                        if (getValidation(object['array'][x]['items'][y]['items'])) {
                                            result += startTagName([
                                                {
                                                    name : 'ul',
                                                    param : {
                                                        class : [
                                                            'list-group',
                                                            'list-group-flush',
                                                            'img-fluid',
                                                            'img-thumbnail',
                                                            'rounded',
                                                            'shadow-sm',
                                                        ],
                                                    },
                                                }
                                            ]);
                                                for (let z = 0; z < object['array'][x]['items'][y]['items']['length']; z++) {
                                                    result += startTagName([
                                                        {
                                                            name : 'li',
                                                            param : {
                                                                class : [
                                                                    'list-group-item',
                                                                    'p-3',
                                                                ],
                                                                style : {
                                                                    padding : '0',
                                                                },
                                                            },
                                                        },
                                                    ]);
                                                        result += startTagName([ { name : 'div', param : { class : [ 'row' ], }, }, ]);
                                                            result += circleThumbnail({
                                                                title : object['array'][x]['items'][y]['items'][z]['title'],
                                                                description : '',
                                                                image : object['array'][x]['items'][y]['items'][z]['image'],
                                                                diameter : 150,
                                                                col : 6,
                                                            });
                                                            let n = '';
                                                            n += getTypeNumber({ index : y });
                                                            n += getTypeNumber({ index : z });
                                                            let isTitle ='';
                                                            if (getValidation(object['array'][x]['items'][y]['items'][z]['title'])) {
                                                                isTitle += startTagName([ { name : 'p', }, { name : 'b', }, ]);
                                                                isTitle += getContainer({
                                                                    container : {
                                                                        index : n,
                                                                        content : object['array'][x]['items'][y]['items'][z]['title'],
                                                                    },
                                                                });
                                                                isTitle += endTagName([ { name : 'p', }, { name : 'b', }, ]);
                                                            };
                                                            let isDescription ='';
                                                            if (getValidation(object['array'][x]['items'][y]['items'][z]['description'])) {
                                                                isDescription += startTagName([ { name : 'p' }, { name : 'em' }, ]);
                                                                isDescription += getContainer({
                                                                    container : {
                                                                        content : object['array'][x]['items'][y]['items'][z]['description'],
                                                                    },
                                                                });
                                                                isDescription += endTagName([ { name : 'p', }, { name : 'em', }, ]);
                                                            };
                                                            let isValue ='';
                                                            if (getValidation(object['array'][x]['items'][y]['items'][z]['number']['value'])) {
                                                                isValue += startTagName([ { name : 'p', }, { name : 'b', }, ]);
                                                                isValue += getContainer({
                                                                    container : {
                                                                        content : object['array'][x]['items'][y]['items'][z]['number']['value'],
                                                                        after : getValidation(object['array'][x]['items'][y]['items'][z]['number']['type']) ? 
                                                                        object['array'][x]['items'][y]['items'][z]['number']['type'] + '.' : '',
                                                                    },
                                                                });
                                                                isValue += endTagName([ { name : 'p', }, { name : 'b', }, ]);
                                                            };
                                                            if (getValidation(isTitle) || getValidation(isDescription) || getValidation(isValue)) {
                                                                result += startTagName([
                                                                    {
                                                                        name : 'div',
                                                                        param : {
                                                                            class : [
                                                                                getValidation(object['array'][x]['items'][y]['items'][z]['image'])
                                                                                ? 'col-6' : 'col',
                                                                                'p-3',
                                                                            ],
                                                                        },
                                                                    }
                                                                ]);
                                                                result += getContainer({
                                                                    container : {
                                                                        content : isTitle + isDescription + isValue,
                                                                    },
                                                                });
                                                                result += endTagName([ { name : 'div' } ]);
                                                            };
                                                        result += '</div>';
                                                    result += '</li>';
                                                };
                                            result += '</ul>';
                                        };
                                    result += '</div>';
                                result += '</div>';
                            result += '</div>';
                        };
                    result += '</div>';
                result += '</div>';
            };
        result += '</div>';
    };
    result += isQuickView;
    return result;
};

const setupQuickView = (object) => {
    let result = '';
    let isPosition = getValidation(object['position'])
    ? object['position'] : 'center';
    result += startTagName([
        {
            name : 'div',
            param : {
                class : [
                    'row',
                ],
            },
        },
        {
            name : 'div',
            param : {
                class : [
                    'd-flex',
                    'justify-content-' + isPosition,
                    'mb-3',
                ]
            },
        },
        {
            name : 'div',
            param : {
                class : [
                    'align-self-' + isPosition,
                    'btn-group',
                ],
            },
        },
    ]);
    result += getContainer({
        container : {
            content : object['container'],
        },
    });
    result += endTagName([ { name : 'div', }, { name : 'div', }, { name : 'div', }, ]);
    return result;
};

const quickView = (object) => {
    let isContainer = '';
    for (let i = 0; i < object['object']['array']['length']; i++) {
        isContainer += startTagName([
            {
                name : 'a',
                param : {
                    href : '#id' + '-' + i,
                    class : [
                        ...btnClasses,
                    ],
                },
            },
        ]);
        isContainer += getContainer({
            container : {
                content : object['object']['array'][i]['title'],
            },
        });
        isContainer += endTagName([ { name : 'a', }, ]);
    };
    let result = '';
    result += getValidation(isContainer) ? setupQuickView({
        container : isContainer,
    }) : '';
    return result;
};

const circleThumbnail = (object) => {
    let result = '';
    if (getValidation(object['image'])) {
        result += startTagName([
            {
                name : 'div',
                param : {
                    class : [
                        getValidation(object['col']) ? 'col-' + object['col'] : 'col',
                        'd-flex',
                        'justify-content-center',
                    ],
                },
            },
        ]);
            result += startTagName([
                {
                    name : 'a',
                    param : {
                        href : object['image'],
                        class : [
                            'align-self-center',
                            'd-flex',
                            'd-lg-block',
                            'd-none',
                            'light-box',
                        ],
                        ...getValidation(object['title']) ? { title : object['title'] } : { },
                    },
                },
            ]);
                result += startTagName([
                    {
                        name : 'div',
                        param : {
                            class : [
                                'bg-white',
                                'border-secondary',
                                'border',
                                'p-1',
                                'rounded-circle',
                                'shadow-sm',
                            ],
                            style : {
                                ...getValidation(object['diameter']) ? { height : object['diameter'] + 'px' } : { height : '150px' },
                                ...getValidation(object['diameter']) ? { width : object['diameter'] + 'px' } : { width : '150px' },
                            },
                        },
                    },
                ]);
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                class : [
                                    'h-100',
                                    'rounded-circle',
                                    'w-100',
                                ],
                                style : {
                                    'background-attachment' : 'scroll',
                                    'background-image' : object['image'],
                                    'background-position' : 'center',
                                    'background-repeat' : 'no-repeat',
                                    'background-size' : 'cover',
                                },
                            },
                        },
                    ]);
                    result += endTagName([ { name : 'div', }, ]);
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                id : 'caption',
                                class : [
                                    'bg-danger',
                                    'caption',
                                    'text-white',
                                    'rounded-circle',
                                ],
                                style : {
                                    position : 'relative',
                                    ...getValidation(object['diameter']) ? { top : (- 1 * object['diameter'] + 10) + 'px' } : { top : '-140px' },
                                    left : '0',
                                },
                            },
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : object['title'].substr(0, 'Bienal de São'['length']) + ' [...].',
                        },
                    });
                    result += endTagName([ { name : 'div', }, ]);
                result += endTagName([ { name : 'div', }, ]);
            result += endTagName([ { name : 'div', }, ]);
        result += endTagName([ { name : 'a', }, ]);
    };
    return result;
};

const boxThumbnail = (object) => {
    let result = '';
    if (getValidation(object['image'])) {
        result += startTagName([
            {
                name : 'div',
                param : {
                    class : [
                        'mb-3',
                    ],
                },
            },
        ]);
            result += startTagName([
                {
                    name : 'a',
                    param : {
                        href : object['image'],
                        ...getValidation(object['title']) ? { title : object['title'] } : undefined,
                        class : [
                            'light-box',
                        ],
                    },
                },
            ]);
                result += startTagName([
                    {
                        name : 'img',
                        param : {
                            ...getValidation(object['title']) ? { alt : object['title'] } : undefined,
                            src : object['image'],
                            class : [
                                'img-fluid',
                                'img-thumbnail',
                                'rounded',
                                'shadow-sm',
                                'w-100',
                            ],
                        },
                    },
                ]);
                result += startTagName([
                    {
                        name : 'div',
                        param : {
                            id : 'caption',
                            class : [
                                'bg-danger',
                                'caption',
                                'text-white',
                                'px-5',
                            ]
                        },
                    },
                ]);
                result += getContainer({
                    container : {
                        content : object['description'].substr(0, 250) + ' [...].',
                    },
                });
                result += endTagName([ { name : 'div', }, ]);
            result += endTagName([ { name : 'a', }, ]);
        result += endTagName([ { name : 'div', }, ]);
    };
    return result;
};

const getHeader = (object) => {
    let result = '';
    let isTitle = '';
    if (getValidation(object['title'])) {
        isTitle += startTagName([
            {
                name : 'h1',
                param : {
                    id : getValidation(object['index']) ? 'id-' + object['index'] : '',
                    style : {
                        margin : '0',
                        padding : '0',
                    },
                },
            }
        ]);
        isTitle += getContainer({
            container : {
                content : object['title'],
            },
        });
        isTitle += endTagName([
            {
                name : 'h1',
            },
        ]);
    };
    let isDescription = '';
    if (getValidation(object['description'])) {
        const isTag = [
            {
                name : 'p',
                param : {
                    class : [
                        'text-danger',
                    ],
                },
            },
            {
                name : 'b',
            },
            {
                name : 'em',
            },
        ];
        isDescription += startTagName(isTag);
        isDescription += getContainer({
            container : {
                content : object['description'],
            },
            tag : isTag,
        });
        isDescription += endTagName(isTag);
    };

    if (getValidation(object['title']) || getValidation(object['description'])) {
        result += startTagName([
            {
                name : 'div',
                param : {
                    class : [
                        'mb-3',
                        'w-100',
                    ]
                },
            },
        ]);
            result += startTagName([
                {
                    name : 'div',
                    param : {
                        class : [
                            'px-3',
                            'row',
                        ],
                    },
                },
            ]);
                result += circleThumbnail({
                    title : object['title'],
                    description : '',
                    image : object['image'],
                    diameter : 150,
                    col : 2,

                    
                });
                if (getValidation(isTitle) || getValidation(isDescription)) {
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                class : [
                                    getValidation(object['image']) ? 'col-10' : 'col',
                                ],
                            },
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : isTitle + isDescription,
                        },
                    });
                    result += endTagName([ { name : 'div' } ]);
                };
            result += '</div>';
        result += '</div>';
    };
    return result;
};

const getIntercalate = (object) => {
    let result = '';
    result += startTagName([
        {
            name : 'div',
            param : {
                class : [
                    getValidation(object) ?
                    getValidation(object['index'])
                    ? Number(object['index']) % 2 === 0 ? 'bg-dark' : 'bg-light'
                    : 'bg-light'
                    : 'bg-light',
                    getValidation(object) ?
                    getValidation(object['index'])
                    ? Number(object['index']) % 2 === 0 ? 'text-light' : 'text-dark'
                    : 'text-dark'
                    : 'text-dark',
                    'px-3',
                    'pt-3',
                    'mb-3',
                ],
            },
        },
    ]);
    return result;
};

const bootstrapGallery = (object) => {
    let result = '';
    let isQuickView = quickView({ object : object });
    for (let x = 0; x < object['array']['length']; x++) {
        result += isQuickView;
        result += getIntercalate({ index : x });
            result += getHeader({
                title : object['array'][x]['title'],
                description : object['array'][x]['description'],
                index : x,
            });
            if (getValidation(object['array'][x]['items'])) {
                result += startTagName([ { name : 'div', param : { id : 'body', }, }, ]);
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                class : [
                                    'gx-3',
                                    'row',
                                ],
                            },
                        },
                    ]);
                        for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                            result += startTagName([
                                {
                                    name : 'div',
                                    param : {
                                        class : [
                                            'col-lg-4',
                                            'col-sm-6',
                                        ],
                                    },
                                },
                            ]);
                                result += boxThumbnail({
                                    title : object['array'][x]['items'][y]['title'],
                                    description : object['array'][x]['items'][y]['description'],
                                    image : object['array'][x]['items'][y]['image'],
                                });
                                if (getValidation(object['array'][x]['items'][y]['title'])) {
                                    result += startTagName([
                                        {
                                            name : 'p',
                                            param : {
                                                class : [
                                                    'mb-3',
                                                ],
                                            },
                                        },
                                        {
                                            name : 'b',
                                        },
                                    ]);
                                    result += getContainer({
                                        container : {
                                            content : object['array'][x]['items'][y]['title'],
                                        },
                                    });
                                    result += endTagName([ { name : 'p', }, { name : 'b', }, ]);
                                };
                                if (getValidation(object['array'][x]['items'][y]['description'])) {
                                    result += startTagName([
                                        {
                                            name : 'p',
                                            param : {
                                                class : [
                                                    'mb-3',
                                                ],
                                            },
                                        },
                                        {
                                            name : 'em',
                                        },
                                    ]);
                                    result += getContainer({
                                        container : {
                                            content : object['array'][x]['items'][y]['description'],
                                        },
                                    });
                                    result += endTagName([ { name : 'p', }, { name : 'em', }, ]);
                                };
                            result += '</div>';
                        };
                    result += '</div>';
                result += '</div>';
            };
        result += '</div>';
    };
    result += isQuickView;
    return result;
};

const bootstrapCarousel = (object) => {
    let result = '', isID = getValidation(object['id']) ? object['id'] : 'carousel';
    result += startTagName([
        {
            name : 'div',
            param : {
                id : isID,
                class : [
                    'carousel',
                    'slide',
                ],
                'data-bs-ride' : 'carousel',
            },
        },
    ]);
        let isContainer = '';
        for (let i = 0; i < object['array']['length']; i++) {
            isContainer += startTagName([
                {
                    name : 'button',
                    param : {
                        type : 'button',
                        'data-bs-target' : '#' + isID,
                        'data-bs-slide-to' : String(i),
                        class : (!i ? 'active' : ''),
                        'aria-current' : (!i ? 'true' : ''),
                        'aria-label' : ('Slide' + ' ' + (i + 1)),
                    },
                },
            ]);
        };
        result += startTagName([
            {
                name : 'div',
                param : {
                    class : [
                        'carousel-indicators'
                    ],
                },
            },
        ]);
        result += getContainer({
            container : {
                content : isContainer,
            },
        });
        result += endTagName([ { name : 'div', }, ]);
        result += startTagName([
            {
                name : 'div',
                param : {
                    class : [
                        'carousel-inner',
                    ],
                },
            },
        ]);
            for (let i = 0; i < object['array']['length']; i++) {
                result += startTagName([
                    {
                        name : 'div',
                        param : {
                            class : [
                                'carousel-item',
                                !i ? 'active' : '',
                            ],
                        },
                    },
                ]);
                    result += startTagName([
                        {
                            name : 'img',
                            param : {
                                alt : object['array'][i]['title'],
                                class : [
                                    'd-block',
                                    'w-100',
                                ],
                                src : object['array'][i]['image'],
                            },
                        },
                    ]);
                    let isTitle = '';
                    isTitle += startTagName([ { name : 'h3', }, { name : 'em', }, ]);
                    isTitle += getContainer({
                        container : {
                            content : object['array'][i]['title'],
                        },
                    });
                    isTitle += endTagName([ { name : 'h3', }, { name : 'em', }, ]);
                    let isDescription = '';
                    isDescription += startTagName([ { name : 'p', }, { name : 'em', }, ]);
                    isDescription += getContainer({
                        container : {
                            content : object['array'][i]['description'],
                        },
                    });
                    isDescription += endTagName([ { name : 'p', }, { name : 'em', }, ]);
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                class : [
                                    'carousel-caption',
                                    'd-none',
                                    'd-md-block',
                                ],
                            },
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : isTitle + isDescription,
                        },
                    });
                    result += endTagName([ { name : 'div', }, ]);
                result += endTagName([ { name : 'div', }, ]);
            };
        result += endTagName([ { name : 'div', }, ]);
        let array = [ 'prev', 'next' ];
        for (let i = 0; i < array['length']; i++) {
            result += startTagName([
                {
                    name : 'button',
                    param : {
                        class : [
                            'carousel-control-' + array[i],
                            !i ? 'active' : '',
                        ],
                        type : 'button',
                        'data-bs-target' : '#' + isID,
                        'data-bs-slide' : array[i],
                    },
                },
            ]);
                result += startTagName([
                    {
                        name : 'span',
                        param : {
                            class : [
                                'carousel-control-' + array[i] + '-icon',
                            ],
                            'aria-hidden' : 'true'
                        },
                    },
                ]);
                result += endTagName([ { name : 'span', }, ]);
                result += startTagName([
                    {
                        name : 'span',
                        param : {
                            class : [
                                'visually-hidden',
                            ],
                        },
                    },
                ]);
                result += endTagName([ { name : 'span', }, ]);
            result += endTagName([ { name : 'button', }, ]);
        };
    result += endTagName([ { name : 'div', }, ]);
    return result;
};

const bootstrapNavbar = (object) => {
    let result = '';
    result += startTagName([{ name : 'nav', param : { id : 'navbar', } }]);
        result += startTagName([
            {
                name : 'a',
                param : {
                    'aria-controls' : 'navbarSupportedContent',
                    'aria-expanded' : 'false',
                    'aria-label' : [
                        'Toggle',
                        'navigation',
                    ],
                    class : [
                        'navbar-toggler',
                    ],
                    'data-bs-target' : '#navbarSupportedContent',
                    'data-bs-toggle' : 'collapse',
                    'type' : 'button',
                },
            },
            {
                name : 'span',
                param : {
                    class : [
                        'navbar-toggler-icon',
                    ]
                },
            },
        ]);
        result += endTagName([ { name : 'a', }, { name : 'span', }, ]);
        result += startTagName([
            {
                name : 'div',
                param : {
                    class : [
                        'collapse',
                        'navbar-collapse',
                    ],
                    id : 'navbarSupportedContent'
                },
            },
        ]);
            result += startTagName([
                {
                    name : 'ul',
                    param : {
                        class : [
                            'navbar-nav',
                            'me-auto',
                            'mb-2',
                            'mb-lg-0',
                        ],
                    },
                },
            ]);
                if (getValidation(object['title'])) {
                    result += startTagName([
                        {
                            name : 'li',
                            param : {
                                class : [
                                    'nav-item',
                                ],
                            },
                        },
                        {
                            name : 'a',
                            param : {
                                class : [
                                    'nav-link',
                                ],
                            },
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : object['title'],
                        },
                    });
                    result += endTagName([ { name : 'li', }, { name : 'a', }, ]);
                };
                for (let x = 0; x < object['array']['length']; x++) {
                    result += startTagName([
                        {
                            name : 'li',
                            param : {
                                class : [
                                    'nav-item',
                                    getValidation(object['array'][x]['items']) ? 'dropdown' : '',
                                ],
                            },
                        },
                    ]);
                        let id = getLowerCase('dropDown' + getRomanNumber(x + 1));
                        result += startTagName([
                            {
                                name : 'a',
                                param : {
                                    'aria-expanded' : getValidation(object['array'][x]['items']) ? 'false' : '',
                                    class : getValidation(object['array'][x]['items']) ? [
                                        'nav-link',
                                        'dropdown-toggle',
                                    ] : [
                                        'nav-link',
                                    ],
                                    'data-bs-toggle' : getValidation(object['array'][x]['items']) ? 'dropdown' : '',
                                    href : getLowerCase(object['array'][x]['path']),
                                    id : getValidation(object['array'][x]['items']) ? id : '',
                                    role : getValidation(object['array'][x]['items']) ? 'button' : '',
                                },
                            },
                        ]);
                        result += getContainer({
                            container : {
                                content : getFirstUpperCase(object['array'][x]['title']),
                            },
                        });
                        result += endTagName([ { name : 'a', }, ]);
                        if (getValidation(object['array'][x]['items'])) {
                            result += startTagName([
                                {
                                    name : 'ul',
                                    param : {
                                        class : [
                                            'dropdown-menu',
                                            'p-3',
                                        ],
                                        'aria-labelledby' : id,
                                    },
                                },
                            ]);
                                for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                                    result += startTagName([ { name : 'li', }, ]);
                                        if (getValidation(object['array'][x]['items'][y]['title'])) {
                                            result += startTagName([ { name : 'h6', }, ]);
                                            result += getContainer({
                                                container : {
                                                    content : getFirstUpperCase(object['array'][x]['items'][y]['title']),
                                                },
                                            });
                                            result += endTagName([ { name : 'h6', }, ]);
                                        };
                                        result += startTagName([ { name : 'ul', }, ]);
                                            for (let z = 0; z < object['array'][x]['items'][y]['items']['length']; z++) {
                                                result += startTagName([
                                                    {
                                                        name : 'li',
                                                    },
                                                    {
                                                        name : 'a',
                                                        param : {
                                                            class : [
                                                                'dropdown-item',
                                                            ],
                                                            href : getValidation(object['array'][x]['items'][y]['items'][z]['path'])
                                                            ? object['array'][x]['items'][y]['items'][z]['path'] : '#',
                                                        },
                                                    },
                                                ]);
                                                result += getContainer({
                                                    container : {
                                                        content : object['array'][x]['items'][y]['items'][z]['title'],
                                                    },
                                                });
                                                result += endTagName([ { name : 'li', }, { name : 'a', }, ]);
                                            };
                                        result += '</ul>';
                                    result += '</li>';
                                };
                            result += '</ul>';
                        };
                    result += '</li>';
                };
            result += '</ul>';
        result += '</div>';
        if (isThis(object['key'], 'undefined') || isThis(object['searchAction'], 'undefined')) { } else {
            result += startTagName([
                {
                    name : 'form',
                    param : {
                        action : object['searchAction'],
                        id : 'search-form',
                        method : 'GET',
                    },
                },
            ]);
                result += startTagName([
                    {
                        name : 'input',
                        param : {
                            'aria-label' : 'Search',
                            class : [
                                'form-control',
                            ],
                            name : 'key',
                            placeholder : getFirstUpperCase('Search'),
                            type : 'search',
                            value : object['key'],
                        },
                    },
                ]);
                result += startTagName([
                    {
                        name : 'button',
                        param : {
                            type : 'submit',
                        },
                    },
                ]);
                result += getContainer({
                    container : {
                        content : getFirstUpperCase('Search'),
                    },
                });
                result += endTagName([ { name : 'button', }, ]);
            result += '</form>';
        };
    result += endTagName([ { name : 'nav', param : { id : 'navbar' } } ]);
    return result;
};

const bootstrapModal = (object) => {
    let result = '';
    result += startTagName([ { name : 'div', param : { class : [ 'modal', 'fade', ], id : 'modal-' + object['array'][object['index']]['id'], }, }, ]);
        result += startTagName([ { name : 'div', param : { class : [ 'modal-dialog', ], }, }, ]);
            result += startTagName([ { name : 'div', param : { class : [ 'modal-content', ], }, }, ]);
                if (getValidation(object['title'])) {
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                class : [
                                    'modal-header',
                                ],
                            },
                        },
                        {
                            name : 'h5',
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : object['title'],
                        },
                    });
                    result += endTagName([ { name : 'div', }, { name : 'h5', }, ]);
                };
                if (getValidation(object['description'])) {
                    result += startTagName([
                        {
                            name : 'div',
                            param : {
                                class : [
                                    'modal-body',
                                ],
                            },
                        },
                        {
                            name : 'p',
                        },
                        {
                            name : 'em',
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : object['description'],
                        },
                    });
                    result += endTagName([ { name : 'div', }, { name : 'p', }, { name : 'em', }, ]);
                };
                result += startTagName([
                    {
                        name : 'div',
                        param : {
                            class : [
                                'modal-footer',
                            ],
                        },
                    },
                ]);
                    let currentAction = '';
                    currentAction += '/' + object['prefix'];
                    currentAction += '/' + 'delete';
                    currentAction += '/' + object['array'][object['index']]['id'];
                    currentAction += '?_method=DELETE';
                    currentAction = currentAction.trim().toLowerCase();
                    result += startTagName([
                        {
                            name : 'form',
                            param : {
                                action : currentAction,
                                method : 'POST'
                            },
                        },
                        {
                            name : 'button',
                            param : {
                                type : 'submit'
                            },
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : getFirstUpperCase('yes!'),
                        },
                    });
                    result += endTagName([ { name : 'form', }, { name : 'button', }, ]);
                    result += startTagName([
                        {
                            name : 'button',
                            param : {
                                type : 'button',
                                'data-bs-dismiss' : 'modal',
                            },
                        },
                    ]);
                    result += getContainer({
                        container : {
                            content : getFirstUpperCase('no.'),
                        },
                    });
                    result += endTagName([ { name : 'button', }, ]);
                result += endTagName([ { name : 'div', }, ]);
            result += endTagName([ { name : 'div', }, ]);
        result += endTagName([ { name : 'div', }, ]);
    result += endTagName([ { name : 'div', }, ]);
    return result;
};

const getTypeNumber = (object) => {
    let result = '';
    result += getValidation(object['typeNumber'])
    ? object['typeNumber'] === 'roman' ? getRomanNumber(object['index'] + 1) : object['index'] + 1
    : object['index'] + 1;
    result += '. ';
    return result;
};

const startTagName = (array) => {
    let result = '';
    for (let x = 0; x < array['length']; x++) {
        if (getValidation(array[x]['name'])) {
            result += '<';
            result += getValidation(array[x]['name'])
            ? array[x]['name'] : 'div';
            const isArray = getValidation(array[x]['param'])
            ? getProperty(array[x]['param'])
            : undefined;
            if (getValidation(isArray)) {
                for (let y = 0; y < isArray['prop']['length']; y++) {
                    if (getValidation(isArray['value'][y])) {
                        result += ' ';
                        result += getTrim(isArray['prop'][y]);
                        result += '=\"';
                        if (isThis(isArray['value'][y], 'string')) {
                            result += isArray['value'][y];
                        } else if (isThis(isArray['value'][y], 'object')) {
                            for (let prop in isArray['value'][y]) {
                                if (isArray['value'][y].hasOwnProperty(prop)) {
                                    result += prop == 0 ? '' : ' ';
                                    result += !Array.isArray(isArray['value'][y]) ? prop : '';
                                    result += !Array.isArray(isArray['value'][y]) ? ':' : '';
                                    result += prop === 'background-image'
                                    ? 'url(' + isArray['value'][y][prop] + ')'
                                    : isArray['value'][y][prop];
                                    result += !Array.isArray(isArray['value'][y]) ? ';' : '';
                                };
                            };
                        };
                        result += '\"';
                    };
                };
            };
            result += '>';
        };
    };
    return result;
};

const endTagName = (array) => {
    let result = '';
    const isArray = (array).reverse();
    for (let i = 0; i < isArray['length']; i++) {
        if (getValidation(isArray[i]['name'])) {
            result += '</';
            result += getValidation(isArray[i]['name'])
            ? isArray[i]['name']
            : 'div';
            result += '>';
        };
    };
    return result;
};

const getProperty = (object) => {
    const value = [];
    for (const prop in Object.getOwnPropertyDescriptors(object))
        value.push(Object.getOwnPropertyDescriptors(object)[prop]['value']);
    return Array.isArray(object) ? { value : object } : {
        prop : Object.getOwnPropertyNames(object),
        value : value,
    };
};

// FABIO

const getContainer = (object) => {
    let result = '';
    if (getValidation(object['container'])) {
        for (const prop in getProperty(object['container'])['value']) {
            if (getProperty(object['container'])['prop'][prop] === 'content') {
                if (getValidation(object['entry-point'])) {
                    let JOIN = '';
                    JOIN += object['entry-point'];
                    JOIN += getValidation(object['tag']) ? endTagName(object['tag']) + startTagName(object['tag'].reverse()) : '';
                    result += getProperty(object['container'])['value'][prop].split(object['entry-point']).join(JOIN);
                } else {
                    result += getProperty(object['container'])['value'][prop];
                }
            } else if (getProperty(object['container'])['prop'][prop] !== 'content') {
                result += getProperty(object['container'])['value'][prop];
            };
        };
    };
    return result;
};

let objectCleaner = (content) => {
    let array = [];
    for (let x = 0; x < content['length']; x++) {
        let index = {};
        for (let y = 0; y < Object.getOwnPropertyNames(content[x])['length']; y++) {
            let isName = Object.getOwnPropertyNames(content[x])[y];
            let isDescriptor = Object.getOwnPropertyDescriptors(content[x]);
            isDescriptor[isName]['value']
            ? index[isName] = isDescriptor[isName]['value']
            : undefined;
        };
        if (isEmpty(index)) { } else {
            array.push(index);
        };
    };
    return array;
};

let bootstrapAccordion = (object) => {
    let result = '';
    let isQuickView = quickView({ object : object });
    let columnImage = 2, columnText = 12 - columnImage;
    for (let i = 0; i < object['array']['length']; i++) {
        result += isQuickView;
        result += getIntercalate();
            result += getHeader({
                title : object['array'][i]['title'],
                description : object['array'][i]['description'],
                index : i,
            });
            let accordionID = '';
            accordionID += 'accordion';
            accordionID += '-';
            accordionID += i;
            result += startTagName([ { name : 'div', param : { class : [ 'accordion', ], id : accordionID, }, }, ]);
                for (let x = 0; x < object['array'][i]['items']['length']; x++) {
                    let isID = '-' + i + '-' + x;
                    result += startTagName([ { name : 'div', param : { class : [ 'accordion-item', ], }, }, ]);
                        if (getValidation(columnImage)) {
                            result += startTagName([
                                {
                                    name : 'h2',
                                    param : {
                                        class : [
                                            'accordion-header',
                                        ],
                                        id : 'heading' + isID,
                                    },
                                },
                                {
                                    name : 'button',
                                    param : {
                                        'aria-controls' : 'collapse' + isID,
                                        'aria-expanded' : 'false',
                                        class : [
                                            'accordion-button',
                                            'collapsed',
                                        ],
                                        'data-bs-target' : '#collapse' + isID,
                                        'data-bs-toggle' : 'collapse',
                                        type : 'button',
                                    },
                                },
                            ]);
                            result += getContainer({
                                container : {
                                    index : getTypeNumber({ index : x }),
                                    content : object['array'][i]['items'][x]['title'],
                                },
                            });
                            result += endTagName([ { name : 'h2', }, { name : 'button', }, ]);
                        };
                        result += startTagName([
                            {
                                name : 'div',
                                param : {
                                    'aria-labelledby' : 'heading' + isID,
                                    class : [
                                        'accordion-collapse',
                                        'collapse',
                                    ],
                                    'data-bs-parent' : '#' + accordionID,
                                    id : 'collapse' + isID,
                                },
                            },
                        ]);
                            if (getValidation(object['array'][i]['items'][x]['description']) || getValidation(object['array'][i]['items'][x]['items'])) {
                                result += startTagName([ { name : 'div', param : { class : [ 'accordion-body', ], }, }, ]);
                                    if (getValidation(object['array'][i]['items'][x]['description'])) {
                                        result += startTagName([ { name : 'div', param : { class : [ 'row', ], }, }, ]);
                                            if (getValidation(columnImage)) {
                                                result += startTagName([
                                                    {
                                                        name : 'div',
                                                        param : {
                                                            class : [
                                                                'col-' + columnImage,
                                                            ],
                                                        },
                                                    },
                                                ]);
                                                result += endTagName([ { name : 'div', }, ]);
                                            };
                                            if (getValidation(object['array'][i]['items'][x]['description'])) {
                                                result += startTagName([
                                                    {
                                                        name : 'div',
                                                        param : {
                                                            alt : '',
                                                            class : [
                                                                'col-' + columnText,
                                                                getValidation(object['array'][i]['items'][x]['items']) ? 'mb-3' : '',
                                                                'px-3',
    
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        name : 'h5',
                                                    },
                                                ]);
                                                result += getContainer({
                                                    container : {
                                                        content : object['array'][i]['items'][x]['description'],
                                                    },
                                                });
                                                result += endTagName([ { name : 'div', }, { name : 'h5', }, ]);
                                            };
                                        result += '</div>';
                                    };
                                    if (getValidation(object['array'][i]['items'][x]['items'])) {
                                        result += startTagName([ { name : 'div', param : { class : [ 'row', ], }, }, ]);
                                            if (getValidation(columnImage)) {
                                                result += startTagName([
                                                    {
                                                        name : 'div',
                                                        param : {
                                                            alt : '',
                                                            class : [
                                                                'col-' + columnImage,
                                                            ],
                                                        },
                                                    },
                                                ]);
                                                result += endTagName([ { name : 'div', }, ]);
                                            };
                                            result += startTagName([ { name : 'div', param : { class : [ 'col-' + columnText, ], }, }, ]);
                                                result += startTagName([ { name : 'ul', param : { class : [ 'ps-3', ], }, }, ]);
                                                    for (let y = 0; y < object['array'][i]['items'][x]['items']['length']; y++) {
                                                        result += startTagName([ { name : 'li' }, ]);
                                                            let n = '';
                                                            n += getTypeNumber({ index : x });
                                                            n += getTypeNumber({ index : y });
                                                            if (getValidation(object['array'][i]['items'][x]['items'][y]['title'])) {
                                                                result += startTagName([
                                                                    {
                                                                        name : 'p',
                                                                        param : {
                                                                            alt : '',
                                                                            class : [
                                                                                'mb-3',
                                                                            ],
                                                                        },
                                                                    },
                                                                ]);
                                                                result += getContainer({
                                                                    container : {
                                                                        index : n,
                                                                        content : object['array'][i]['items'][x]['items'][y]['title'],
                                                                    },
                                                                });
                                                                result += endTagName([ { name : 'p', }, ]);
                                                            };
                                                            if (getValidation(object['array'][i]['items'][x]['items'][y]['description'])) {
                                                                result += startTagName([
                                                                    {
                                                                        name : 'p',
                                                                        param : {
                                                                            alt : '',
                                                                            class : [
                                                                                'mb-3',
                                                                                'text-danger',
                                                                            ],
                                                                        },
                                                                    },
                                                                    {
                                                                        name : 'em',
                                                                    },
                                                                ]);
                                                                result += getContainer({
                                                                    container : {
                                                                        content : object['array'][i]['items'][x]['items'][y]['description'],
                                                                    },
                                                                });
                                                                result += endTagName([ { name : 'p', }, { name : 'em', }, ]);
                                                            };
                                                            if (getValidation(object['array'][i]['items'][x]['items'][y]['items'])) {
                                                                result += startTagName([ { name : 'ul', }, ]);
                                                                    for (let z = 0; z < object['array'][i]['items'][x]['items'][y]['items']['length']; z++) {
                                                                        let n = '';
                                                                        n += getTypeNumber({ index : x });
                                                                        n += getTypeNumber({ index : y });
                                                                        n += getTypeNumber({ index : z });
                                                                        if (getValidation(object['array'][i]['items'][x]['items'][y]['items'][z])) {
                                                                            result += startTagName([
                                                                                {
                                                                                    name : 'li',
                                                                                },
                                                                                {
                                                                                    name : 'p',
                                                                                    param : {
                                                                                        alt : '',
                                                                                        class : [
                                                                                            'mb-3',
                                                                                            'text-success',
                                                                                        ],
                                                                                    },
                                                                                },
                                                                                {
                                                                                    name : 'em',
                                                                                },
                                                                            ]);
                                                                            result += getContainer({
                                                                                container : {
                                                                                    index : n,
                                                                                    content : object['array'][i]['items'][x]['items'][y]['items'][z],
                                                                                },
                                                                            });
                                                                            result += endTagName([ { name : 'li', }, { name : 'p', }, { name : 'em', }, ]);
                                                                        };
                                                                    };
                                                                result += '</ul>';
                                                            };
                                                        result += '</li>';
                                                    };
                                                result += '</ul>';
                                            result += '</div>';
                                        result += '</div>';
                                    };
                                result += '</div>';
                            };
                        result += '</div>';
                    result += '</div>';
                };
            result += '</div>';
        result += '</div>';
    };
    result += isQuickView;
    return result;
};

const getLowerCase = (content) => {
    return String(content).trim().toLowerCase();
};

const jsonFileReader = (array) => {
    return isThere(array) ? JSON.parse(fs.readFileSync(urlJoin(array), { encoding : 'utf-8' })) : [];
};

const getPathPrefix = (content) => {
    return {
        pathPrefix : getValidation(content) ? String(content).trim().split('-').join('/').toLowerCase() : '',
        isPathPrefix : getValidation(content) ? String(content).trim().split('-').join('/').toLowerCase() : '',
    }
};

const getPageTitle = (object) => {
    let result = '';
    result += getValidation(object['prefix']) ? object['prefix'] : '';
    result += getValidation(object['suffix']) ? ' ' + object['suffix'] : '';
    return {
        isPageTitle : result.trim().split('-').join(' ').toLowerCase(),
    };
};

const getRandomNumber = (object) => {
    return Math.floor(Math.random() * (Math.floor(object['maximum']) - Math.ceil(object['minimum']))) + Math.ceil(object['minimum']);
};

const isTheLast = (string, letter) => {
    return string.substr(string['length'] - 1, string['length']) === letter;
};

const getCurrency = (content) => {
    return (content).toLocaleString('pt-br', {
        style : 'currency',
        currency : 'USD',
    });
};

const getDOCNumber = (array) => {
    let num = '', result = '';
    for (let x = 0; x < array['length']; x++) {    
        for (let y = 0; y < array[x]; y++) num += '9';
        result += ('' + Math.floor(Math.random() * Number(num))).padStart(Number(num['length']), '0');
        result += x == array['length'] - 2 ? '-' : '';
        result += x <= array['length'] - 3 ? '.' : '';
        num = '';
    }
    return result;
};

const getRequest = (array) => {
    return require(urlJoin([ '..', ...array ]));
};

const getPublicList = () => {
    const getRecordList = (content) => {
        const result = [];
        const contentFilePath = [ 'database', 'option.js' ];
        for (let i = 0; i < getRequest(contentFilePath)[content]['length']; i++) {
            result.push({
                first : getRequest(contentFilePath)[content][i],
                last : getRequest(contentFilePath)['last'][Math.floor(Math.random() * getRequest(contentFilePath)['last']['length'])],
                gender : content,
            });
        };
        return result;
    };
    return [        
        ...getRecordList('female'),
        ...getRecordList('male'),
    ];
};

const getForeignKey = (table) => {
    return {
        ...table !== 'category' ? {
            fk_category : getRandomNumber({
                minimum : 1,
                maximum : 9,
            }),
        } : {
        },
        fk_public : getRandomNumber({
            minimum : 1,
            maximum : getPublicList()['length'],
        }),
    };
};

const getUserSession = (content) => {
    return {
        isUserSession : !isEmpty(content) ? content : undefined,
    };
};

const isThere = (array) => {
    return fs.existsSync(urlJoin(array));
};

const addJsDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.js' ];
    const contentFile = isThere(contentFilePath) ? getRequest(contentFilePath) : [];
    object['attachment'] ? contentFile.push(object['attachment']) : undefined;
    fs.writeFileSync(urlJoin(contentFilePath), 'const ' + object['title'] + ' = ');
    fs.appendFileSync(urlJoin(contentFilePath), JSON.stringify(contentFile));
    fs.appendFileSync(urlJoin(contentFilePath), ';');
    fs.appendFileSync(urlJoin(contentFilePath), 'module.exports = ' + object['title'] + ';');
};

const addJsonDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.json' ];
    const contentFile = isThere(contentFilePath) ? JSON.parse(fs.readFileSync(urlJoin(contentFilePath), { encoding : 'utf-8' })) : [];
    object['attachment'] ? contentFile.push(object['attachment']) : undefined;
    fs.writeFileSync(urlJoin(contentFilePath), JSON.stringify(contentFile));
};

const saveJsDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.js' ];
    fs.writeFileSync(urlJoin(contentFilePath), 'const ' + object['title'] + ' = ');
    fs.appendFileSync(urlJoin(contentFilePath), JSON.stringify(object['content']));
    fs.appendFileSync(urlJoin(contentFilePath), ';');
    fs.appendFileSync(urlJoin(contentFilePath), 'module.exports = ' + object['title'] + ';');
};

const getLoremIpsum = (object) => {
    const contentFilePath = [ 'database', 'option.js' ];
    return {
        title : isThere(contentFilePath) ? getRequest(contentFilePath)['lorem']['title'] : '',
        description : isThere(contentFilePath) ? getRequest(contentFilePath)['lorem']['description'] : '',
    };
};

const getRandomIndex = (object) => {
    const result = [];
    const contentFilePath = [ 'database', 'option.js' ];
    for (let i = 0; i < getRequest(contentFilePath)[object['array']]['length']; i++)
        result.push(getRequest(contentFilePath)[object['array']][i]['option']);
    return result[Math.floor(Math.random() * result['length'])];
};

const getRomanNumber = (content) => {
    let result = '';
    let division = 0;
    let rest = content;
    let arabic = [ 1000, 500, 100, 50, 10 ];
    let romans = [ 'm', 'd', 'c', 'l', 'x' ];
    let dozen = [ 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix' ];
    for (let i = 0; i < arabic['length']; i++) {
        division = parseInt(rest / arabic[i]);
        rest = content % arabic[i];
        if (division > 0) {
            for (let x = 0; x < division; x++) {
                result = result + romans[i];
            };
        };
        if (rest < 10) {
            result = result + dozen[rest - 1];
            break;
        };
    };
    return result;
};

const getCNPJNumber = (array) => {
    let num = '', result = '';
    for (let x = 0; x < array['length']; x++) {    
        for (let y = 0; y < array[x]; y++) num += '9';
        result += x == 3 ? '0001' : ('' + Math.floor(Math.random() * Number(num))).padStart(Number(num['length']), '0');
        result += x == array['length'] - 2 ? '-' : '';
        result += x == array['length'] - 3 ? '/' : '';
        result += x <= array['length'] - 4 ? '.' : '';
        num = '';
    }
    return result;
};

const getCPFNumber = () => {
    let getDOCDigit = (num1, num2, num3, num4) => {
        let num = num1.split('').concat(num2.split(''), num3.split('')), x = 0;    
        if (num4 !== undefined) num[9] = num4;
        for (let i = (num4 ? 11 : 10), j = 0; i >= 2; i--, j++) x += parseInt(num[j]) * i;
        return (y = x % 11) < 2 ? 0 : 11 - (y = x % 11);
    };
    const num1 = getDOCNumber([3]), num2 = getDOCNumber([3]), num3 = getDOCNumber([3]), dig = getDOCDigit(num1, num2, num3);
    return `${ num1 }.${ num2 }.${ num3 }-${ dig }${ getDOCDigit(num1, num2, num3, dig) }`;
};

const getRandomDate = (object) => {
    object['start'] = new Date(object['start']).getTime();
    object['end'] = new Date(object['end']).getTime();
    return object['start'] > object['end'] ? new Date(getRandomNumber({
        minimum : object['end'],
        maximum : object['start'],
    })) : new Date(getRandomNumber({
        minimum : object['start'],
        maximum : object['end'],
    }));
};

const getPhoneNumber = (array) => {
    let num = '', result = '(';
    for (let x = 0; x < array['length']; x++) {    
        for (let y = 0; y < array[x]; y++) num += '9';
        result += x == 1 ? '9' : ('' + Math.floor(Math.random() * Number(num))).padStart(Number(num['length']), '0');
        result += x == array['length'] - 2 ? '-' : '';
        result += x == array['length'] - 3 ? ' ' : '';
        result += x <= array['length'] - 4 ? ') ' : '';
        num = '';
    }
    return result;
};

const getHash = (content) => {
    return bcrypt.hashSync(String(content), 10);
};

const isEqual = (object) => {
    return bcrypt.compareSync(object['front'], object['back']);
};

const getJsPagination = (object) => {
    const listPage = [];
    const offset = Number(object['offset']), limit = object['limit'], array = object['array'];
    const gap = limit * (offset - 1);
    for (let i = gap; i < (gap + limit <= array['length'] ? gap + limit : array['length']); i++)
        listPage.push(array[i]);
    return {
        fullPage : Math.round(array['length'] / limit),
        listPage : listPage,
        nextPage : offset < Math.round(array['length'] / limit) ? offset + 1 : Math.round(array['length'] / limit),
        prevPage : offset <= 1 ? 1 : offset - 1,
    };
};

const getModelPagination = (object) => {
    const fullPage = Math.round(object['count'] / object['amount']);
    return {
        fullPage : fullPage <= 1 ? undefined : fullPage,
        nextPage : Number(object['offset']) < fullPage ? Number(object['offset']) + 1 : fullPage,
        prevPage : Number(object['offset']) <= 1 ? 1 : Number(object['offset']) - 1,
    };
};

const getFormHeader = (object) => {
    return {
        isFormAttribute : {
            ...object['prefix'] && object['suffix'] ? {
                action : getURLPath({
                    prefix : object['prefix'],
                    suffix : object['suffix'],
                }),
            } : {
            },
            ...object['enctype'] ? {
                enctype : object['enctype'],
            } : {
            },
            ...object['method'] ? {
                method : object['method'],
            } : {
            },
        },
    };
};

const getModelParams = (object) => {
    return {
        ...object['model'] && object['alias'] ? {
            include : {
                model : object['model'],
                as : object['alias'],
                required : true,
            },
        } : {
        },
        ...object['limit'] ? {
            limit : object['limit'],
        } : {
        },
        ...object['offset'] ? {
            offset : object['offset'],
        } : {
        },
        ...object['column'] ? {
            order : [
                [object['column'], 'ASC'],
            ],
        } : {
        },
        ...object['column'] && object['param'] ? {
            where : {
                [object['column']] : object['param'],
            },
        } : {
        },
    };
};

const getModelSearchParams = (object) => {
    const result = [];
    if (!object['array'] || !object['key']) { } else {
        for (let i = 0; i < object['array']['length']; i++)
            result.push({
                [object['array'][i]] : {
                    [ Op.like ] : `%${ object['key'] }%`,
                },
            });
    }
    return {
        ...result ? {
            where : {
                [ Op.or ] : [
                    ...result,
                ],
            },
        } : { },
    };
};

const getInputType = () => {
    return {
        isInputType : getRequest([ 'database', 'option.js' ])['inputType'],
    };
};

const getSearchAction = (object) => {
    return {
        isSearchAction : getURLPath({
            prefix : object['prefix'],
            suffix : object['suffix'],
        }),
    };
};


const getFormElement = (object) => {
    return {
        isFormElement : getRequest([ 'database', 'element.js' ])[object['element']][object['type']],
    };
};

const getFirstUpperCase = (content) => {
    let result = '';
    result += String(content).charAt(0).toUpperCase();
    result += String(content).slice(1);
    return result;
};


const toClean = (result) => {
    let array = [
        ['&nbsp;', ' '],
        [' ', '-'],
        [',', ''],
        ['_', '_'],
        ['-', ''],
        ['!', ''],
        ['?', ''],
        ['.', ''],
        ['', ''],
        ['(', ''],
        ['(', ''],
        [')', ''],
        [')', ''],
        ['@', ''],
        ['*', ''],
        ['/', ''],
        ['&', ''],
        ['#', ''],
        ['%', ''],
        ['©', ''],
        ['®', ''],
        ['+', ''],
        ['=', ''],
        ['|', ''],
        ['$', ''],
        ['Á', 'a'],
        ['á', 'a'],
        ['À', 'a'],
        ['à', 'a'],
        ['Â', 'a'],
        ['â', 'a'],
        ['Å', 'a'],
        ['å', 'a'],
        ['Ä', 'a'],
        ['ä', 'a'],
        ['Ã', 'a'],
        ['ã', 'a'],
        ['Æ', 'ae'],
        ['æ', 'ae'],
        ['Ç', 'c'],
        ['ç', 'c'],
        ['Ð', 'd'],
        ['ð', 'd'],
        ['É', 'e'],
        ['é', 'e'],
        ['È', 'e'],
        ['è', 'e'],
        ['Ê', 'e'],
        ['ê', 'e'],
        ['Ë', 'e'],
        ['ë', 'e'],
        ['Í', 'i'],
        ['í', 'i'],
        ['Ì', 'i'],
        ['ì', 'i'],
        ['Î', 'i'],
        ['î', 'i'],
        ['Ï', 'i'],
        ['ï', 'i'],
        ['Ñ', 'n'],
        ['ñ', 'n'],
        ['Ó', 'o'],
        ['ó', 'o'],
        ['Ò', 'o'],
        ['ò', 'o'],
        ['ô', 'o'],
        ['Ô', 'o'],
        ['Ö', 'o'],
        ['ö', 'o'],
        ['Õ', 'o'],
        ['õ', 'o'],
        ['Ø', 'o'],
        ['ø', 'o'],
        ['ß', 'b'],
        ['Ú', 'u'],
        ['ú', 'u'],
        ['Ù', 'u'],
        ['ù', 'u'],
        ['Û', 'u'],
        ['û', 'u'],
        ['Ü', 'u'],
        ['ü', 'u'],
        ['Ý', 'y'],
        ['ý', 'y'],
        ['Þ', 'p'],
        ['þ', 'p'],
    ];
    for (let i = 0; i < array['length']; i++)
        result = result.split(array[i][0]).join(array[i][1]);
    return result.trim();
};

const getPlural = (content) => {
    if (isTheLast(content, 'y')) content = content.substr(0, content['length'] - 1) + 'ies';
    else if (isTheLast(content, 's')) content += 'es';
    else content += 's';
    return content.trim().toLowerCase();
};

const getBTNTitle = (content) => {
    return {
        isBTNTitle : String(content).trim(),
    };
};

const getURLPath = (object) => {
    let result = '';
    result += object['prefix'] ? '/' + object['prefix'].split('-').join('/') : '';
    result += object['suffix'] ? '/' + object['suffix'] : '';
    return result.trim().toLowerCase();
};

const objectCreator = (array) => {
    const result = [];
    result.push({
        id : 0,
        option : '',
    });
    for (let i = 0; i < array['length']; i++)
        result.push({
            id : i + 1,
            option : array[i],
        });
    return result;
};

const arrayCreator = (object) => {
    const result = [];
    const letter = jsonFileReader([
        ...object['path'],
        'letter.json',
    ]);
    for (let i = 0; i < letter['length']; i++) {
        if (isThere([ ...object['path'], object['name'], letter[i] + '.json' ]))
            result.push(...jsonFileReader([
                ...object['path'],
                object['name'],
                letter[i] + '.json'
            ]));
    }
    return result;
};

const getSalaryRange = (object) => {
    const result = [];
    result.push({
        id : 0,
        minimum : '',
        maximum : '',
        option : '',
    });
    for (let i = 1; i < object['end']; i++) {
        let minimum = object['gap'] * (i + 0);
        let maximum = object['gap'] * (i + 1) - 0.01;
        result.push({
            id : i,
            minimum : minimum,
            maximum : maximum,
            option : 'from ' + getCurrency(minimum) + ' to ' + getCurrency(maximum),
        });
    }
    return result;
};

let getDateFormat = (content) => {
    const day = new Date(content).getDate().toString().padStart(2, '0'),
    month = (new Date(content).getMonth() + 1).toString().padStart(2, '0'),
    year = new Date(content).getFullYear();
    return day + '/' + month + '/' + year;
};

const getJsDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.js' ];
    return isThere(contentFilePath) ? getRequest(contentFilePath) : [];
};

const getGJSMFile = (object) => {
    return {
        isGJSMFile
        : isThere([ 'public', 'javascripts', object['content'] + '.js' ])
        ? '<script type=\"module\" src=\"/javascripts/' + object['content'] + '.js\"></script>'
        : '',
    };
};

const getPJSMFile = (object) => {
    return {
        isPJSMFile
        : isThere([ 'public', 'javascripts', object['content'] + '.js' ])
        ? '<script type=\"module\" src=\"/javascripts/' + object['content'] + '.js\"></script>'
        : '',
    };
};

const getGCSSFile = (object) => {
    return {
        isGCSSFile
        : isThere([ 'public', 'stylesheets', object['content'] + '.css' ])
        ? '<link rel=\'stylesheet\' href=\'/stylesheets/' + object['content'] + '.css\'/>'
        : '',
    };
};
const getPCSSFile = (object) => {
    return {
        isPCSSFile
        : isThere([ 'public', 'stylesheets', object['content'] + '.css' ])
        ? '<link rel=\'stylesheet\' href=\'/stylesheets/' + object['content'] + '.css\'/>'
        : '',
    };
};

const variableName = (object) => {
    let array = [];
    for (let i = 0; i < object['content'].split('-')['length']; i++)
        array.push(object['content'].split('-')[i]);
    let result = '';
    result += getValidation(object['prefix']) ? object['prefix'] : '';
    for (let i = 0; i < array['length']; i++)
        result += !i ? getValidation(object['prefix']) ? getFirstUpperCase(array[i]) : getLowerCase(array[i]) : getFirstUpperCase(array[i]);
    return result;
};

const getJSONFile = (object) => {
    return {
        [variableName({
            prefix : 'is',
            content : object['content']
        })]
        : jsonFileReader([ 'database', 'json', object['content'] + '.json' ]),
    };
};

let variables = () => {
    return {
        ...getGCSSFile({ content : 'style' }),
        ...getGJSMFile({ content : 'script' }),
        ...getJSONFile({ content : 'accordion' }),
        ...getJSONFile({ content : 'carousel' }),
        ...getJSONFile({ content : 'gallery' }),
        ...getJSONFile({ content : 'footer-quick-menu' }),
        ...getJSONFile({ content : 'navbar' }),
        ...getJSONFile({ content : 'convenience' }),
    };
};

let bootstraps = () => {
    return {
        bootstrapAccordion,
        bootstrapCarousel,
        bootstrapGallery,
        bootstrapModal,
        bootstrapNavbar,
    };
};

let views = () => {
    return {
        viewListGroup,
    };
};
const packages = () => {
    return {
        ...bootstraps(),
        ...variables(),
        ...views(),
        endTagName,
        footerQuickMenu,
        getContainer,
        getCurrency,
        getDateFormat,
        getFirstUpperCase,
        getRomanNumber,
        getValidation,
        isEmpty,
        isThis,
        startTagName,
        toClean,
    };
};

module.exports = {
    packages,
    ...packages(),
    addJsDatabase,
    addJsonDatabase,
    arrayCreator,
    getBTNTitle,
    getCNPJNumber,
    getCPFNumber,
    getDOCNumber,
    getForeignKey,
    getFormElement,
    getFormHeader,
    getHash,
    getInputType,
    getJsDatabase,
    
    getPJSMFile,
    getPCSSFile,

    getJsPagination,
    getLoremIpsum,
    getModelPagination,
    getModelParams,
    getModelSearchParams,
    getPageTitle,
    getPathPrefix,
    getPhoneNumber,
    getPlural,
    getPublicList,
    getRandomDate,
    getRandomIndex,
    getRandomNumber,
    getSalaryRange,
    getSearchAction,
    getURLPath,
    getUserSession,
    isEqual,
    isTheLast,
    isThere,
    jsonFileReader,
    objectCreator,
    saveJsDatabase,
    urlJoin,
    variableName,
};