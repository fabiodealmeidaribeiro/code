
console.time();
for (let index = 0; index < 10; index++) { console.count(); }
console.timeEnd();

console.log('---');

console.warn('Isso é um aviso');

console.log('---');

let person = [
    {
        name : 'Fábio',
        age : 38,
    },
    {
        name : 'Mária',
        age : 35,
    },
    {
        name : 'Roberto',
        age : 40,
    },
];

for (let i = 0; i < person.length; i++) {
    let array = new Array(person.length).fill(person[i].name);
    console.log(array);
}

console.log('---');

let fruit = ['laranja', 'banana'];
let vegetable = ['alface', 'espinafre', 'espinafre'];
let food = [...fruit, ...vegetable];
console.log(food);

console.log('---');

let unique = Array.from(new Set(food));
unique = [...new Set(food)];
console.log(unique);

console.log('---');

let num = [1, 2, 3, 4, 5];
num = [3, 3, 3];
let sum = num.reduce((x, y) => x + y);
console.log(sum);

console.log('---');

let first = 'Fábio', last = 'Ribeiro';
first = last = 'Ribeiro';
console.log(first);
console.log(last);

console.log('---');

let languages = ['javascript', 'python', 'php'];
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}

console.log('---');

for (let i of languages) console.log(i);

console.log('---');

let extract = (string) => { return string ? string.replace(/\D/g, '') : string; }
console.log(extract('224.680.508-27'));

console.log('---');

const marcas = [
    {
        id : 1,
        name : 'a',
    },
    {
        id : 2,
        name : 'b',
    },
];
console.log(marcas.find((index) => { return index.name === 'a' }));

console.log('---');

var post = (title, message, author) => {
    return {
        title,
        message,
        author,
        views : 10,
        comments : [
            {
                author : '',
                message : '',
            },
            {
                author : '',
                message : '',
            },
        ],
        live : false,
    }
}

console.log(post('a', 'b', 'c'));

console.log('---');

let I = ``;
let II = '';
let III = "";

const name = 'Fábio de Almeida Ribeiro';
const email = `Olá ${ name }! Obrigado por você estar aqui!`;
console.log(email);

console.log('---');

let celular = {
    marca : 'asus',
    tamanho : {
        v : 155,
        h : 75,
    },
    ligar : () => {
        console.log('Fazendo ligação...');
    }
};
celular = Object.assign({ bateria : 5000 }, celular);
console.log(celular);

console.log('---');

const mouse = {
    cor : 'red',
    marca : 'dazz',
};
mouse.velocidade = 5000;
mouse.dpi = () => {
    console.log('dpi');
};
delete mouse.velocidade;
delete mouse.dpi;
console.log(mouse);

console.log('---');

let prime = (number) => {
    for (let divider = 2; divider < number; divider++) {
        return number % divider === 0 ? false : true;
    }
}
let show = (limit) => {
    for (let number = 2; number <= limit; number++) {
        prime(number) ? console.log(number) : undefined;
    }
}
show(15);

console.log('---');

let display = (line) => {
    for (let i = 0; i < line; i++) {
        let pattern = '';
        for (let x = 0; x < i; x++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}
display(10);

console.log('---');

const array = [50, 40, 30, 20, 10];
let average = (array) => {
    let sum = 0;
    for (let i of array) { sum += i; }
    return sum / array.length;
}
console.log(average(array));

console.log('---');

let score = (score) => {
    return average(score) < 59 ? 'F' : average(score) < 69 ? 'D' : average(score) < 79 ? 'C' : average(score) < 89 ? 'B' : 'A';
};

console.log(score(array));

console.log('---');

let multiple = (limit) => {
    let mI = 0;
    let mII = 0;
    for (let i = 0; i <= limit; i++) {
        mI += i % 3 === 0 ? i : 0;
        mII += i % 5 === 0 ? i : 0;
    }
    console.log(mI + mII);
}
multiple(10);

console.log('---');

let pairs = (number) => {
    for (let i = 0; i <= number; i++) {
        i % 2 === 0 ? console.log(i + ' is pair.') : console.log(i + ' is odd.');
    }
}
console.log(pairs(10));

console.log('---');

let speed = (speed) => {
    const kmp = 5;
    const maximum = 70;
    if (speed <= maximum) { return 'ok!'; } else {
        const point = Math.floor((speed - maximum) / kmp);
        return point <= 12 ? point + 'points' : 'Suspended wallet.';
    }
}
console.log(speed(85));

console.log('---');

let fizzBuzz = (value) => {
    if (typeof value !== 'number') { return 'não é um número!';
    } else if (value % 3 === 0 && value % 5 === 0) { return 'FizzBuzz';
    } else if (value % 3 === 0) { return 'Fizz';
    } else if (value % 5 === 0) { return 'Buzz';
    } else { return value; }
}

console.log(fizzBuzz(10));

console.log('---');

let max = (num1, num2) => { return num1 > num2 ? num1 : num2; };
let bigger = max(10, 20);
console.log(bigger);
bigger = Math.max(40, 20);
console.log(bigger);

console.log('---');

let random = (min, max) => {
    return Math.random() * (max - min) + min;
}
console.log(random(10, 20));

console.log('---');

let randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomInt(10, 20));

console.log('---');

const date = new Date(1982, 3 - 1, 20);
date.setFullYear(2030);
date.toDateString();
console.log(date);

console.log('---');

let address = {
    street : 'a',
    city : 'b',
    code : 'c',
};
let showAddress = (address) => {
    for (let key in address) { console.log(key, address[key]); }
};

showAddress(address);

console.log('---');

function Address(street, city, code) {
    this.street = street;
    this.city = city;
    this.code = code;
};
const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');
const address3 = address1;
let theSame = (address1, address2) => {
    return address1.street === address2.street
    && address1.city === address2.city
    && address1.code === address2.code;
};
console.log(theSame(address1, address2));

console.log('---');

let theSameMemory = (address1, address2) => {
    return address1 === address2;
};
console.log(theSameMemory(address1, address2));
console.log(theSameMemory(address1, address3));

console.log('---');

function builder(title, message, author) {
    this.title = title;
    this.message = message;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.live = false;
}
let message = new builder('a', 'b', 'c');
console.log(message);

console.log('---');

let numbers = [1, 2, 3, 1];
numbers.unshift(0);
console.log(numbers);

numbers.splice(1, 0, 'a');
console.log(numbers);

numbers.push(5);
console.log(numbers);

console.log(numbers.indexOf(2));

console.log(numbers.lastIndexOf(2) !== - 1);

console.log(numbers.includes(2));

console.log('---');

const brands = [
    {
        id : 1,
        name : 'a',
    },
    {
        id : 2,
        name : 'a',
    },
];
console.log(brands.find((element) => {
    // return element.name === 'a';
    return element['name'] === 'a';
}));

console.log('---');

console.log(numbers.pop());
console.log(numbers.shift());
console.log(numbers.splice(2, 1));

console.log('---');

let nums = numbers;
nums.length = 0;
// nums = nums.splice(0, nums.length);
console.log(nums);

console.log('---');

const p = [{ id : 1 }];
const s = [4, 5, 6];
p[0].id = 10;
const c = p.concat(s);
console.log(c);

console.log('---');

console.log(c.slice(1, 3));

console.log('---');

numbers = [1, 2, 3];

numbers.forEach((numbers) => {
    console.log(numbers);
});

console.log('---');

console.log(Number(numbers.join('')) * 2);

console.log('---');

let phrase = 'seja bem vindo ao curso';
let result = phrase.split(' ');
console.log(result);

console.log(result.join('-'));

console.log('---');

let color = prompt('What´s your color?');
color == 'red' ? alert('My color is (' + color.toLocaleUpperCase() + ').') : alert('error!');

console.log('---');

