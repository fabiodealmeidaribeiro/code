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

let navbar = [
    {
        note : false,
        title: 'history',
    },
    {
        array: [
            {
                title: 'Autônomo / Full Stack Developer',
                discretion: '2007 até o momento',
            },
            {
                title: 'Agência KMC / Full Stack Developer',
                discretion: '2006',
            },
            {
                title: 'Futurebrand / Designer Gráfico Júnior',
                discretion: '2005',
            },
            {
                title: 'Ghirotti & Cia / Dir. de Arte Júnior',
                discretion: '2004',
            },
            {
                title: 'DPZ Propaganda / Dir. de Arte Júnior',
                discretion: '2001 à 2003',
            },
            {
                title: 'DPZ Propaganda / Assist. de Arte',
                discretion: '1996 à 2000',
            },
            {
                title: 'M Design / Assist. de Arte',
                discretion: '1995',
            },
            {
                title: 'MPO Vídeo / Assist. de Arte',
                discretion: '1994',
            },
        ],
        note : false,
        title: 'experiences',
    },
    {
        array: [
            { title: 'Adobe Illustrator', discretion: '1994', },
            { title: 'Adobe Photoshop' },
            { title: 'Git' },
            { title: 'MySQL Workbench' },
            { title: 'Node' },
            { title: 'Postman' },
            { title: 'Visual Studio Code' },
            { title: 'XAMPP' },
        ],
        note : false,
        title: 'programs',
    },
    {
        array: [
            { title: 'Bootstrap', discretion: '1994', },
            { title: 'CSS' },
            { title: 'DOM' },
            { title: 'Flexbox' },
            { title: 'GitHub' },
            { title: 'HTML' },
            { title: 'JavaScript' },
            { title: 'SASS' },
            { title: 'Sequelize' },
        ],
        note : true,
        title: 'skills',
    },
    {
        array: [
            {
                title: 'facebook',
                discretion: '1994',
                target: '_blank',
                href: 'facebook.com/laranjadev',
            },
            {
                title: 'github',
                target: '_blank',
                href: 'github.com/laranja-dev',
            },
            {
                title: 'instagram',
                target: '_blank',
                href: 'instagram.com/laranjadev/',
            },
            {
                title: 'linkedin',
                target: '_blank',
                href: 'linkedin.com/in/laranjadev',
            },
        ],
        note : false,
        title: 'social',
    },
];

pageTitle = 'Fábio Ribeiro';

getSelector('title').appendChild(createNode(getFirstUpperCase(pageTitle)));

setAttribute({ element: getSelector('body'), attribute: 'id', value: 'top', });

for (let i = 1; i < navbar['length']; i++) {
    m = 'm-' + i;
    c = 'c-' + i;
    ID = navbar[i]['title'].replace(' ', '-');
    div_c = createElement('div');
    setAttribute({ element: div_c, attribute: 'id', value: c, });
    setAttribute({ element: div_c, attribute: 'role', value: 'group', });
    div_m = createElement('div');
    setAttribute({ element: div_m, attribute: 'id', value: m, });
    setAttribute({ element: div_m, attribute: 'role', value: 'group', });
    getID('container').appendChild(div_c).appendChild(div_m);
    for (let x = 0; x < navbar['length']; x++) {
        a = createElement('a');
        a.appendChild(createNode(getFirstUpperCase(navbar[x]['title'])));
        setAttribute({ element: a, attribute: 'href', value: '#' + navbar[x]['title'].replace(' ', '-'), });
        div_m.appendChild(a);
    };
    section = createElement('section');
    setAttribute({ element: section, attribute: 'id', value: ID, });
    h = createElement('h2');
    h.appendChild(createNode(getFirstUpperCase(navbar[i]['title'])));
    getID('container').appendChild(section).appendChild(h);
    if (!getValidation(navbar[i]['note'])) { } else {
        note = createElement('div');
        setAttribute({ element: note, attribute: 'id', value: 'note-' + navbar[i]['title'], });
        section.appendChild(note);
    }
    for (let x = 0; x < navbar[i]['array']['length']; x++) {
        a = createElement('a');
        if (!getValidation(navbar[i]['array'][x]['target'])) { } else {
            attribute = createAttribute('target');
            attribute['value'] = navbar[i]['array'][x]['target'];
            a.setAttributeNode(attribute);
        };
        if (!getValidation(navbar[i]['array'][x]['href'])) { } else {
            attribute = createAttribute('href');
            attribute['value'] = 'http://';
            attribute['value'] += navbar[i]['array'][x]['href'];
            a.setAttributeNode(attribute);
        };
        section.appendChild(a);
        if (!getValidation(navbar[i]['array'][x]['title'])) { } else {
            p = createElement('p');
            p.appendChild(createNode(getFirstUpperCase(navbar[i]['array'][x]['title'])));
            a.appendChild(p);
        };
        if (!getValidation(navbar[i]['array'][x]['discretion'])) { } else {
            h = createElement('h3');
            h.appendChild(createNode(getFirstUpperCase(navbar[i]['array'][x]['discretion'])));
            a.appendChild(h);
        };
    };
};

navbarBrand = createElement('a');
setAttribute({ element: navbarBrand, attribute: 'id', value: 'navbar-brand', });
setAttribute({ element: navbarBrand, attribute: 'href', value: '#top', });

navbarTitle = createElement('span');
setAttribute({ element: navbarTitle, attribute: 'id', value: 'navbar-title', });

h = createElement('h3');
h.appendChild(createNode(getFirstUpperCase(pageTitle)));

getID('sidebar').appendChild(navbarBrand).appendChild(navbarTitle).appendChild(h);

navbarImage = createElement('div');
setAttribute({ element: navbarImage, attribute: 'id', value: 'navbar-image', });

photo = createElement('div');
setAttribute({ element: photo, attribute: 'id', value: 'photo', });

navbarBrand.appendChild(navbarImage).appendChild(photo);

navbarToggler = createElement('button');
setAttribute({ element: navbarToggler, attribute: 'id', value: 'navbar-toggler', });
setAttribute({ element: navbarToggler, attribute: 'type', value: 'button', });
setAttribute({ element: navbarToggler, attribute: 'data-bs-toggle', value: 'collapse', });
setAttribute({ element: navbarToggler, attribute: 'data-bs-target', value: '#navbar-responsive', });
setAttribute({ element: navbarToggler, attribute: 'aria-controls', value: 'navbar-responsive', });
setAttribute({ element: navbarToggler, attribute: 'aria-expanded', value: 'false', });
setAttribute({ element: navbarToggler, attribute: 'aria-label', value: 'Toggle navigation', });

navbarIcon = createElement('span');
setAttribute({ element: navbarIcon, attribute: 'id', value: 'navbar-icon', });

getID('sidebar').appendChild(navbarToggler).appendChild(navbarIcon);

navbarResponsive = createElement('div');
setAttribute({ element: navbarResponsive, attribute: 'id', value: 'navbar-responsive', });

navbarNav = createElement('ul');
setAttribute({ element: navbarNav, attribute: 'id', value: 'navbar-nav', });

getID('sidebar').appendChild(navbarResponsive).appendChild(navbarNav);

for (let i = 0; i < navbar['length']; i++) {
    li = createElement('li'), h = createElement('h3'), a = createElement('a');
    !i ? setAttribute({ element: a, attribute: 'class', value: 'active', }) : undefined;
    setAttribute({ element: a, attribute: 'href', value: '#' + navbar[i]['title'].replace(' ', '-'), });
    a.appendChild(createNode(getFirstUpperCase(navbar[i]['title'])));
    getID('navbar-nav').appendChild(li).appendChild(h).appendChild(a);
};

addRemoveClasses({
    elements: [
        'body',
    ],
    classes: [
        'bg-light',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#container',
    ],
    classes: [
        'container-fluid',
        'px-5',
    ],
    method: 'add',
});

headings = [];

for (let i = 1; i < 6; i++) {
    let index = '';
    index += 'section';
    index += '>';
    index += 'h';
    index += i;
    headings.push(index);
};

addRemoveClasses({
    elements: [
        ...headings,
        'section>a>p',
        'section>p',
    ],
    classes: [
        'p-0',
        'm-0',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#sidebar',
    ],
    classes: [
        'bg-white',
        'fixed-top',
        'navbar-dark',
        'navbar-expand-lg',
        'navbar',
        'px-3',
        'rounded',
        'shadow-sm',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-image',
    ],
    classes: [
        'bg-white',
        'border-secondary',
        'border',
        'd-lg-block',
        'd-none',
        'p-1',
        'rounded-circle',
        'shadow-sm',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-brand',
    ],
    classes: [        
        'js-scroll-trigger',
        'm-0',
        'navbar-brand',
        'p-0',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-toggler',
    ],
    classes: [
        'navbar-toggler',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-title',
    ],
    classes: [
        'd-block',
        'd-lg-none',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#photo',
    ],
    classes: [
        'h-100',
        'rounded-circle',
        'w-100',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#history',
    ],
    classes: [
        'mb-5',
        'pt-5',
    ],
    method: 'add',
});

sections = [];

for (let i = 1; i < navbar['length']; i++) {
    let index = '';
    index += '#';
    index += navbar[i]['title'].replace(' ', '-');
    sections.push(index);
};

addRemoveClasses({
    elements: [
        ...sections,
    ],
    classes: [
        'bg-white',
        'mb-5',
        'p-5',
        'rounded',
        'shadow-sm',
    ],
    method: 'add',
});

sections = [];

for (let i = 0; i < navbar['length']; i++) {
    let index = '';
    index += '#';
    index += 'c';
    index += '-';
    index += i;
    sections.push(index);
};

addRemoveClasses({
    elements: [
        ...sections,
    ],
    classes: [
        'd-flex',
        'justify-content-center',
        'mb-5',
    ],
    method: 'add',
});

sections = [];

for (let i = 0; i < navbar['length']; i++) {
    let index = '';
    index += '#';
    index += navbar[i]['title'].replace(' ', '-');
    index += '>';
    index += 'a';
    sections.push(index);
};

addRemoveClasses({
    elements: [
        ...sections,
    ],
    classes: [
        'align-items-center',
        'd-flex',
        'justify-content-between',
        'list-group-item-action',
        'list-group-item',
    ],
    method: 'add',
});

sections = [];

for (let i = 0; i < navbar['length']; i++) {
    let index = '';
    index += '#';
    index += 'm';
    index += '-';
    index += i;
    sections.push(index);
};

addRemoveClasses({
    elements: [
        ...sections,
    ],
    classes: [
        'btn-group',
    ],
    method: 'add',
});

sections = [];

for (let i = 0; i < navbar['length']; i++) {
    let index = '';
    index += '#';
    index += 'm';
    index += '-';
    index += i;
    index += '>';
    index += 'a';
    sections.push(index);
};

addRemoveClasses({
    elements: [
        ...sections,
    ],
    classes: [
        'btn',
        'btn-outline-secondary',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-icon',
    ],
    classes: [
        'navbar-toggler-icon',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-responsive',
    ],
    classes: [
        'collapse',
        'navbar-collapse',
        'w-100',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-nav',
    ],
    classes: [
        'mt-3',
        'navbar-nav',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-nav>li',
    ],
    classes: [
        'nav-item',
    ],
    method: 'add',
});

addRemoveClasses({
    elements: [
        '#navbar-nav>li>a',
    ],
    classes: [
        'js-scroll-trigger',
        'nav-link',
        'p-0',
        'text-body',
    ],
    method: 'add',
});

const sidebar = window.document.querySelector('#navbar-nav').querySelectorAll('a');
sidebar.forEach((item) => {
    item.addEventListener('click', function () {
        sidebar.forEach((item) => { item.classList.remove('active'); });
        this.classList.add('active');
    });
});