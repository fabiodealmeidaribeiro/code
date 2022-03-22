let array1 = ['banana', 'maça', 'uva'];
let array2 = ['laranja', 'abacate', 'goiba'];
let arrays = [array1, array2];
console.log(arrays);

console.log('---');

arrays = [...array1, ...array2];
console.log(arrays);

console.log('---');

let data = {
    phone : '11 9 4005 8153',
    doc : '32.705.298-3',
}
let person = {
    name : 'Fábio',
    age : 38,
    data,
}
console.log(person);

console.log('---');

person = {
    name : 'Fábio',
    age : 38,
    ...data,
}
console.log(person);

console.log('---');

person = { ...person, ...data };
console.log(person);

console.log('---');

let list = (...param) => { return param; }
let array = list('a', 'b', 'c', 'd');
console.log(array);

console.log('---');

list = (...param) => { return param[2]; }
let string = list('a', 'b', 'c', 'd');
console.log(string);