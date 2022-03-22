let object = {
    name : 'Fábio',
    idade : 32,
    height : 1.73,
}
console.log(object);

console.log('---');

let string = JSON.stringify(object);
console.log(string);

console.log('---');

object = JSON.parse(string);
console.log(object);
console.log(object.name);

console.log('---');

let bakery = ['bread', 'ham', 'cheese'];
console.log(bakery);

console.log('---');

console.log(JSON.stringify(bakery));

console.log('---');

for (let i = 0; i < bakery.length; i++) {
    let item = String(i).length <= 1 ? '0' + (i + 1) + ' : ' + bakery[i].toUpperCase() + '.' : (i + 1) + ' : ' + bakery[i].toUpperCase() + '.';
    console.log(item);
}