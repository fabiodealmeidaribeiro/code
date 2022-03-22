let value = ['Vinicius', 22, 1.80, false, ['Música', 'Café']];
console.log(value[4][1]);
console.log(value.length);
console.log(value[4].length);

console.log('---');

let fruits = ['red', 'blue', 'green'];
console.log(fruits);

console.log('---');

fruits.push('violet', 'yellow');
console.log(fruits);

console.log('---');

let last = fruits.pop();
console.log(last);

console.log('---');

console.log(fruits);

console.log('---');

let first = fruits.shift();
console.log(first);

console.log('---');

console.log(fruits);





console.log('---');

let colors = ['red', 'green', 'blue'];
console.log(colors);

console.log('---');

let exclude = colors.pop();
console.log(colors);

console.log('---');

let include = colors.unshift(exclude);
console.log(colors);

console.log('---');

exclude = colors.shift();
console.log(colors);

console.log('---');

colors.push(exclude);
console.log(colors);

console.log('---');

console.log(colors.indexOf('red'));
console.log(colors.indexOf('green'));
console.log(colors.indexOf('blue'));
console.log(colors.indexOf('yellow'));

console.log('---');

let separador = ', ';
let string = colors.join(separador);
console.log(string);

console.log('---');

let array = string.split(separador);
console.log(array);

console.log('---');

include = colors.push('red');
console.log(colors.lastIndexOf('red'));
console.log(colors);

console.log('---');

exclude = colors.pop();
console.log(colors);

console.log('---');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let double = numbers.map((value) => { return value * 2; });
console.log(double);

console.log('---');

let filtered = numbers.filter((value) => { return value <= 5; });
console.log(filtered);

console.log('---');

let sum = numbers.reduce((cumulative, value) => { return cumulative + value; });
console.log(sum);

console.log('---');

numbers.forEach((value, index) => {
    console.log('The index (' + index + ') has the value (' + value + ').');
});

console.log('---');

let object = {
    a : 1,
    b : 2,
    c : 3
};
array = [];
for (let index in object) array.push(object[i]);
console.log(array);

console.log('---');

array = [];
for (let index in object) array.push(index);
console.log(array);