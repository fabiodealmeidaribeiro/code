import {
    getClass, getID, getName, getSelector, getSelectors, getTag,
    createAttribute, createElement, createText,
    addRemoveClasses, getFirstUpperCase, getValidation, isThis, setAttribute,
} from './main.js';

let navbar = [
    {
        title : 'O Hostel',
        href : '#',
        i : [ 'bx', 'bxs-dashboard', ],
        s : [
            { title: 'Histórico' },
            { title: 'Locaização' },
            { title: 'Fale conosco' },
            { title: 'Parceiros' },
            { title: 'Reconhecimentos' },
        ],
    },
    {
        title : 'Instalações',
        href : '#',
        i : [ 'bx', 'bx-copy', ],
        s : [
            { title: 'Quartos' },
            { title: 'Bar do Deck' },
            { title: 'Taverna' },
        ],
    },
    {
        title : 'Reservas',
        href : '#',
        i : [ 'bx', 'bxs-inbox', ],
    },
    {
        title : 'Atrações',
        href : '#',
        i : [ 'bx', 'bx-user', ],
        s : [
            { title: 'Free Tours' },
            { title: 'Eventos' },
        ],
    },
    {
        title : 'Rede Sociais',
        href : '#',
        i : [ 'bx', 'bx-user', ],
        s : [
            { title: 'tripadvisor' },
            { title: 'Bookign' },
            { title: 'YouTube' },
            { title: 'Facebook' },
            { title: 'Instagram' },
        ],
    },
];

let indexes = [];
for (let x = 0; x < navbar['length']; x++) {
    if(!getValidation(navbar[x]['s'])) { } else {
        for (let y = 0; y < navbar[x]['s']['length']; y++) {
            let href = '';
            href += 'article';
            href += '-';
            href += navbar[x]['s'][y]['title'].replaceAll(' ', '-').toLowerCase();
            let title = getFirstUpperCase(navbar[x]['s'][y]['title']);
            indexes.push({ title : title, href : href, });
        };
    };
};

let pagetitle = 'Pura Vida Hostel';
getSelector('title').appendChild(createText(getFirstUpperCase(pagetitle)));

let logowrap = createElement('div');
setAttribute({ element: logowrap, attribute: 'id', value: 'logo-wrap', });

let a = createElement('a');
setAttribute({ element: a, attribute: 'href', value: '#', });

let logo = createElement('div');
setAttribute({ element: logo, attribute: 'id', value: 'logo', });

let span = createElement('span');
getSelector('aside').appendChild(logowrap).appendChild(a).appendChild(logo);
getSelector('aside').appendChild(logowrap).appendChild(a).appendChild(span);
getSelector('aside').appendChild(logowrap).appendChild(a).appendChild(span).appendChild(createText(getFirstUpperCase(pagetitle)));

let sidemenu = createElement('ul');
setAttribute({ element: sidemenu, attribute: 'class', value: 'side-menu', });
getSelector('aside').appendChild(sidemenu);

for (let x = 0; x < navbar['length']; x++) {
    let li = createElement('li');
    setAttribute({ element: li, attribute: 'class', value: [ 'nav-item', !x ? 'active' : '', ], });
    let a = createElement('a');
    setAttribute({ element: a, attribute: 'href', value: getValidation(navbar[x]['href']) ? navbar[x]['href'] : '#', });
    let div = createElement('div');
    setAttribute({ element: div, attribute: 'id', value: 'icon-wrap', });
    if (!getValidation(navbar[x]['i'])) {    
        getSelector('aside').appendChild(sidemenu).appendChild(li).appendChild(a).appendChild(div);
    } else {
        let i = createElement('i');
        setAttribute({ element: i, attribute: 'class', value: [ ...navbar[x]['i'] ], });
        getSelector('aside').appendChild(sidemenu).appendChild(li).appendChild(a).appendChild(div).appendChild(i);
    };
    let span = createElement('span');
    getSelector('aside').appendChild(sidemenu).appendChild(li).appendChild(a).appendChild(span);
    getSelector('aside').appendChild(sidemenu).appendChild(li).appendChild(a).appendChild(span).appendChild(createText(getFirstUpperCase(navbar[x]['title'])));
    if (!getValidation(navbar[x]['s'])) { } else {
        let i = createElement('i');
        setAttribute({ element: i, attribute: 'class', value: [ 'bx', 'bxs-chevron-right', ], });
        getSelector('aside').appendChild(sidemenu).appendChild(li).appendChild(a).appendChild(i);
        let sidesubmenu = createElement('ul');
        setAttribute({ element: sidesubmenu, attribute: 'class', value: 'side-sub-menu', });
        getSelector('aside').appendChild(sidemenu).appendChild(li).appendChild(sidesubmenu);
        for (let y = 0; y < navbar[x]['s']['length']; y++) {
            let href = '';
            href += '#';
            href += 'article';
            href += '-';
            href += navbar[x]['s'][y]['title'];
            href = href.replaceAll(' ', '-');
            href = href.toLowerCase();
            let title = getFirstUpperCase(navbar[x]['s'][y]['title']);
            let s_li = createElement('li');
            let s_a = createElement('a');
            setAttribute({ element: s_a, attribute: 'href', value: href, });
            s_a.appendChild(createText(title));
            sidesubmenu.appendChild(s_li).appendChild(s_a);
        };
    };
};

let header = createElement('header');
getID('container').appendChild(header);
let section = createElement('section');
getID('container').appendChild(section);
let footer = createElement('footer');
getID('container').appendChild(footer);

for (let i = 0; i < indexes['length']; i++) {
    let l = createElement('div');
    setAttribute({ element: l, attribute: 'id', value: (indexes[i]['href']), });
    setAttribute({ element: l, attribute: 'class', value: 'l', });
    section.appendChild(l);
    let article = createElement('article');
    let h = createElement('h4');
    h.appendChild(createText(indexes[i]['title']));
    section.appendChild(article).appendChild(h);
};

for (let i = 1; i < 6; i++) { addRemoveClasses({ elements: [ ('h' + i), ], classes: [ ('display-' + i), 'm-0', ], method: 'add', }) };
addRemoveClasses({ elements: [ 'ol', 'ul', ], classes: [ 'm-0', 'p-0', ], method: 'add', });
addRemoveClasses({ elements: [ 'p', ], classes: [ 'm-0', ], method: 'add', });
addRemoveClasses({ elements: [ 'article', ], classes: [ 'bg-white', 'p-5', 'rounded', 'shadow-sm', ], method: 'add', });
addRemoveClasses({ elements: [ 'section', ], classes: [ 'px-5', 'pb-5', ], method: 'add', });
addRemoveClasses({ elements: [ 'body', ], classes: [ 'bg-dark', ], method: 'add', });
addRemoveClasses({ elements: [ '.l', ], classes: [ 'bg-danger', 'w-100', ], method: 'add', });

let li = getSelector('aside').getElementsByClassName('nav-item');

for (let i of li) { i.onclick = active }

Array.from(li).forEach(element => {
    addRemoveClasses({ elements: [ element, ], classes: [ 'active', ], method: 'remove', });
});

getSelector('aside').onmouseover = () => {
    getSelectors('.bxs-chevron-right').forEach(element => {
        setAttribute({ element: element, attribute: style['opacity'], value: '1', });
    });
};

getSelector('aside').onmouseleave = () => {
    Array.from(li).forEach(element => {
        addRemoveClasses({ elements: [ element, ], classes: [ 'active', ], method: 'remove', });
    });
    getSelectors('.bxs-chevron-right').forEach(element => {
        setAttribute({ element: element, attribute: style['opacity'], value: '0', });
    });
};

function active () {
    Array.from(li).forEach(element => { element.classList.remove('active'); });
    this.classList.add('active');
};