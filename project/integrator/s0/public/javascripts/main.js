export let getTag = (element) => { return window.document.getElementsByTagName(element); };

export let getSelector = (element) => { return window.document.querySelector(element); };

export let getSelectors = (element) => { return window.document.querySelectorAll(element); };

export let getName = (element) => { return window.document.getElementsByName(element); };

export let getClass = (element) => { return window.document.getElementsByClassName(element); };

export let getID = (element) => { return window.document.getElementById(element); };

export let createElement = (element) => { return window.document.createElement(element); };

export let getLang = () => { return window.document.documentElement.lang; };

export let isThis = (string, type) => {
    return typeof string === type;
};

export let getValidation = (content) => {
    if (!content)
        return false;
    else if (isThis(content, 'undefined'))
        return false;
    else
        return true;
};

export let getClearBoth = (object) => {
    let childElement = createElement(object['childElement']);
    childElement['style']['clear'] = 'both';
    getSelector(object['fatherElement']).appendChild(childElement);
};

export let getFirstUpperCase = (content) => {
    let result = '';
    result += (content).charAt(0).toUpperCase();
    result += (content).slice(1);
    return result;
};

export let addRemoveClasses = (object) => {
    for (let x = 0; x < object['elementList']['length']; x++) {
        for (let y = 0; y < getSelectors(object['elementList'][x])['length']; y++) {
            for (let z = 0; z < object['classeList']['length']; z++) {
                getSelectors(object['elementList'][x])[y]['classList'][object['method']](object['classeList'][z]);
            };
        };
    };
};

export let getFieldEvent = (object) => {
    for (let x = 0; x < object['elementList']['length']; x++) {
        for (let y = 0; y < getSelectors(object['elementList'][x])['length']; y++) {
            getSelectors(object['elementList'][x])[y].addEventListener('focus', function (event) {
                this['style']['backgroundColor'] = object['color'];
                this['style']['color'] = object['background'];
            });
            getSelectors(object['elementList'][x])[y].addEventListener('blur', function (event) {
                this['style']['backgroundColor'] = object['background'];
                this['style']['color'] = object['color'];
            });
        };
    };
};

export let getRomanNumber = (content) => {
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

const isEmpty = (object) => {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (object === null) return true;
    if (object['length'] > 0) return false;
    if (object['length'] === 0) return true;
    for (var key in object) if (hasOwnProperty.call(object, key)) return false;
    return true;
};

export let fetchAPIImage = (object) => {
    return fetch(object['APIPath']).then((result) => {
        return result.json();
    }).then((result) => {
        result.forEach((element, index) => {
            createNewElement({
                elementAriaLabel : '',
                elementAriaDescribedby : '',
                elementClasses : [
                    'align-items-center',
                    'd-flex',
                    'justify-content-center',
                    'float-start',
                    'mb-3',
                    (index + 1) % object['columnNumber'] === 0 ? '' : 'me-3',
                    'p-3',
                    'rounded-3',
                ],
                elementContent : '',
                childElement : object['childElement'],
                fatherElement : object['fatherElement'],
                elementID : 'child-' + (index + 1),
                elementName : '',
                elementPlaceholder : '',
                elementStyles : [
                    [ 'backgroundImage', 'url(' + element['url'] + ')' ],
                    [ 'width', 'calc(' + 100 / object['columnNumber'] + '% - ' + (- 1 + object['columnNumber']) / object['columnNumber'] + 'rem)' ],
                    ...object['styleList'],
                ],
                elementType : '',
            });
        });
        getClearBoth({
            childElement : 'div',
            fatherElement : object['fatherElement'],
        });
    });
};

export let setStyleAttribute = (object) => {
    for (let i = 0; i < object['array']['length']; i++)
        object['element']['style'][object['array'][i][0]] = object['array'][i][1];
};

export let setClassAttribute = (object) => {
    let result = '';
    for (let i = 0; i < object['array']['length']; i++) {
        result += i <= 0 ? '' : ' ';
        result += object['array'][i];
        object['element'].setAttribute('class', result);
    };
};

export let containerPalette = (object) => {
    let number = 0;
    for (let x = 0; x < object['columnNumber'] * object['lineNumber']; x++) {
        number++;
        let colorContent = toHexadecimal(colorGenerator()['r'], colorGenerator()['g'], colorGenerator()['b']);
        createNewElement({
            elementAriaLabel : '',
            elementAriaDescribedby : '',
            elementClasses : [
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'float-start',
                'mb-3',
                (x + 1) % object['columnNumber'] === 0 ? '' : 'me-3',
                'p-3',
                'rounded-3',
            ],
            elementContent : '',
            childElement : object['childElement'],
            fatherElement : object['fatherElement'],
            elementID : 'item-' + number,
            elementName : '',
            elementPlaceholder : '',
            elementStyles : [
                [ 'backgroundColor', colorContent ],
                [ 'width', 'calc(' + 100 / object['columnNumber'] + '% - ' + (- 1 + object['columnNumber']) / object['columnNumber'] + 'rem)' ],
                ...object['styleList'],
            ],
            elementType : '',
        });
        createNewElement({
            elementAriaLabel : '',
            elementAriaDescribedby : '',
            elementClasses : [
                'align-middle',
                'text-center',
            ],
            elementContent : colorContent,
            childElement : 'p',
            fatherElement : '#item-' + number,
            elementID : '',
            elementName : '',
            elementPlaceholder : '',
            elementStyles : [
            ],
            elementType : '',
        });
        if ((x + 1) % object['columnNumber'] === 0) {
            getClearBoth({
                childElement : 'div',
                fatherElement : object['fatherElement'],
            });
        };
    };
};

export let createNewElement = (object) => {
    let childElement = createElement(object['childElement']);
    if (!isThis(object['elementAriaLabel'], 'undefined') && object['elementAriaLabel'] !== '')
        childElement.setAttribute('aria-label', object['elementAriaLabel']);
    if (!isThis(object['elementAriaDescribedby'], 'undefined') && object['elementAriaDescribedby'] !== '') 
        childElement.setAttribute('aria-describedby', object['elementAriaDescribedby']);
    if (!isThis(object['elementClasses'], 'undefined') && object['elementClasses'] !== '')
        setClassAttribute({ array : object['elementClasses'], element : childElement });
    if (!isThis(object['elementContent'], 'undefined') && object['elementContent'] !== '')
        childElement['innerText'] = object['elementContent'];
    if (!isThis(object['elementID'], 'undefined') && object['elementID'] !== '')
        childElement.setAttribute('id', object['elementID']);
    if (!isThis(object['elementName'], 'undefined') && object['elementName'] !== '')
        childElement.setAttribute('name', object['elementName']);
    if (!isThis(object['elementPlaceholder'], 'undefined') && object['elementPlaceholder'] !== '')
        childElement.setAttribute('placeholder', object['elementPlaceholder']);
    if (!isThis(object['elementStyles'], 'undefined') && object['elementStyles'] !== '')
        setStyleAttribute({ array : object['elementStyles'], element : childElement });
    if (!isThis(object['elementType'], 'undefined') && object['elementType'] !== '')
        childElement.setAttribute('type', object['elementType']);
    getSelector(object['fatherElement']).appendChild(childElement);
};

export let containerEvents = (elements) => {
    window.addEventListener('load', function (event) {
        for (let x = 0; x < elements['length']; x++) {
            for (let y = 0; y < getSelectors(elements[x])['length']; y++) {
                getSelectors(elements[x])[y].addEventListener('mouseover', function (event) {
                    event.preventDefault();
                    this['classList'].remove('shrink');
                    this['classList'].add('grow');
                });
                getSelectors(elements[x])[y].addEventListener('mouseout', function (event) {
                    this['classList'].remove('grow');
                    this['classList'].add('shrink');
                });
            };
        };
    });
};

export let toHexadecimal = (r, g, b) => {
    let fromRGB = (c) => { return c.toString(16)['length'] <= 1 ? '0' + c.toString(16) : c.toString(16); }
    return '#' + fromRGB(r) + fromRGB(g) + fromRGB(b);
};

export let colorPalette = () => {
    let result = [];
    for (let r = 0; r < 255; r++)
        for (let g = 0; g < 255; g++)
            for (let b = 0; b < 255; b++)
                result.push(toHexadecimal(r, g, b));
    return result;
};

export let colorGenerator = (opacity = 1) => {
    return {
        color : `rgba(${ parseInt(Math.random() * 255) }, ${ parseInt(Math.random() * 255) }, ${ parseInt(Math.random() * 255) }, ${ opacity })`,
        r : parseInt(Math.random() * 255),
        g : parseInt(Math.random() * 255),
        b : parseInt(Math.random() * 255),
    };
};


export let getTimer = (object) => {
    setInterval(function (event) {
        let result = '';
        result += [
            [ 'domingo', 'sunday' ],
            [ 'segunda-feira', 'monday' ],
            [ 'terça-feira', 'tuesday' ],
            [ 'quarta-feira', 'wednesday' ],
            [ 'quinta-feira', 'thursday' ],
            [ 'sexta-feira', 'friday' ],
            [ 'sábado', 'saturday' ],
        ][new Date().getDay()][(object['number'] ? object['number'] : 0)];
        result += ' | ';
        result += [
            [ 'janeiro', 'january' ],
            [ 'fevereiro', 'february' ],
            [ 'março', 'march'],
            [ 'abril', 'april' ],
            [ 'maio', 'may' ],
            [ 'junho', 'june' ],
            [ 'julho', 'July' ],
            [ 'agosto', 'august' ],
            [ 'outubro', 'october' ],
            [ 'novembro', 'november' ],
            [ 'dezembro', 'december' ],
        ][new Date().getMonth()][(object['number'] ? object['number'] : 0)];
        result += ' ';
        result += new Date().getDate().toString().padStart(2, '0');
        result += ', ';
        result += new Date().getFullYear();
        result += ' | ';
        result += new Date().getHours().toString().padStart(2, '0');
        result += ':';
        result += new Date().getMinutes().toString().padStart(2, '0');
        result += ':';
        result += new Date().getSeconds().toString().padStart(2, '0');
        result += '.';
        return getID(object['element']).innerHTML = result;
    }, (object['second'] ? object['second'] : 1) * 1000);
};

export let cleaner = (string) => {
    let array = [
        ['&nbsp;', ' '],
        [' ', '-'],
        [',', ''],
        ['_', ''],
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
        string = string.split(array[i][0]).join(array[i][1]).toLowerCase();
    return string;
};

export let getSignature = (object) => {
    let result = object['name'];
    result += ' | ';
    result += '<a href=\"mailto:' + object['email'] + '\" target=\"_blank\">';
        result += object['email'];
    result += '</a>';
    result += ' | ';
    result += '<a href=\"https://api.whatsapp.com/send?phone=/' + cleaner(object['phone']) + '\" target=\"_blank\">';
        result += object['phone'];
    result += '</a>';
    return getID(object['element']).innerHTML = result;
};

export let getCNPJMask = (object) => {
    getSelector(object['element']).addEventListener('input', (element) => {
        let x = element.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
        element.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
    });
};

export let getElementList = () => {
    const array = [];
    const indexes = [
        'input',
        'select',
        'textarea',
    ];
    for (let x = 0; x < indexes['length']; x++)
        for (let y = 0; y < getSelectors(indexes[x])['length']; y++)
            if (getSelectors(indexes[x])[y]['id'])
                array.push('#' + getSelectors(indexes[x])[y]['id']);
    return array;
};

export let getLineBreak = (object) => {
    let is_start = '', is_end = '';
    let is_id = getValidation(object['id']) ? ' id=\"' + object['id'] + '\"' : '';
    if (isThis(object['element'], 'string')) {
        is_start = '<' + object['element'] + is_id + '>';
        is_end = '</' + object['element'] + '>';
    };
    if (isThis(object['element'], 'object')) {
        for (let i = 0; i <= object['element']['length'] - 1; i++)
            is_start += '<' + object['element'][i] + is_id + '>';
        for (let i = object['element']['length'] + 1; i >= 0; i--)
            is_end += '</' + object['element'][i] + '>';
    };
    let is_content = '';
    is_content += getValidation(object['index']) ? object['index'] : '';
    is_content += getValidation(object['element']) && getValidation(object['letter'])
    ? object['content'].split(object['letter'] + ' ').join(object['letter'] + is_end + is_start)
    : object['content'];
    let result = '';
    result += is_start;
    result += is_content;
    result += is_end;
    return result;
};

export let getFormErrorList = (object) => {
    let errorMessage = (object) => {
        let result = '';
        result += '<li class=\"list-group-item\">';
            result += '<a href=\"' + object['name'] + '\">';
                result += getLineBreak({
                    index : object['index'] + ') ',
                    content : getFirstUpperCase(object['name'].split('#').join('')) + '!',
                    element : [ 'p', 'em' ],
                });
            result += '</a>';
        result += '</li>';
        return object['item']['innerHTML'] += !getValidation(getSelector(object['name'])['value']) ? result : '';
    };
    getSelector(object['messageTarget'])['innerHTML'] = '';
    getSelector(object['messageTarget'])['innerHTML'] += getLineBreak({
        content : getFirstUpperCase('error list!'),
        element : [ 'h1', 'em' ],
    });
    getSelector(object['messageTarget'])['innerHTML'] += '<ul class=\"list-group list-group-flush\"></ul>';
    getSelector('form').addEventListener('submit', function (event) {
        getSelector(object['messageTarget']).querySelector('ul')['innerHTML'] = '';
        for (let i = 0; i < getElementList()['length']; i++) {
            errorMessage({
                item : getSelector(object['messageTarget']).querySelector('ul'),
                name : getElementList()[i],
                index : i + 1,
            });
        };
        if (getSelector(object['messageTarget']).querySelector('ul').querySelectorAll('li')['length']) {
            getSelector(object['messageTarget'])['hidden'] = '';
            event.preventDefault();
        };
    });
};

export let getFieldValidator = (object) => {
    let errorNumber = 0;
    getSelector('form').addEventListener('submit', function (event) {
        for (let i = 0; i < getSelectors(getElementList())['length']; i++) {
            if (getSelectors(getElementList())[i]['value'].trim()) {
                getSelectors(object['messageTarget'])[i]['innerHTML'] = '';
                getSelectors(object['messageTarget'])[i]['hidden'] = 'hidden';
            } else {
                getSelectors(object['messageTarget'])[i]['innerHTML'] = '';
                let result = '';
                result += 'The \"';
                result += getFirstUpperCase(getSelectors(getElementList())[i]['name'].split('#').join(''));
                result += '\" Field Invalid!';
                getSelectors(object['messageTarget'])[i]['innerHTML'] += getLineBreak({
                    content : result,
                    element : [ 'p', 'em' ],
                });
                getSelectors(object['messageTarget'])[i]['hidden'] = '';
            }
            errorNumber += getSelectors(getElementList())[i]['value'].trim() ? 0 : 1;
        };
        errorNumber ? event.preventDefault() : undefined;
    });
};

export let getCEPCheck = (object) => {
    getSelector(object['element']).addEventListener('blur', () => {
        fetch(`https://cep.awesomeapi.com.br/${ cep['value'].replace('-', '') }`, {
            cache : 'default',
            method : 'GET',
            mode : 'cors',
        }).then((result) => {
            return result.json().then((result) => {
                for (const index in result)
                    if (getSelector('#' + index))
                        getSelector('#' + index)['value'] = result[index];
            }).catch((result) => {
                console.log(result);
            });
        }).catch((result) => {
            console.log(result);
        });
    });
};

// window.addEventListener('keypress', function (event) {
//     event.key === 'Enter' ? alert(event.key) : undefined;
//     console.log(event.key);
// });

// let watch = setInterval(function (event) {
//     let date = new Date();
// }, 1000 * 1);

// setTimeout(function (event) {
//     clearInterval(watch);
// }, 1000 * 5);