for (let i = 0; i <= 5; i++) { console.log(i); }

console.log('---');

for (let i = 5; i >= 0; i--) { console.log(i); }

console.log('---');

let object = {
    name : 'Fábio',
    age : 38,
    profession : 'Cleaner'
}

console.log('---');

for(i in object) { console.log(i + ': ' + object[i]); }

console.log('---');

for(i in object) { console.log(object[i]); }

console.log('---');

let array = ['apple', 'orange', 'grape'];

for(i of array) { console.log(i); }