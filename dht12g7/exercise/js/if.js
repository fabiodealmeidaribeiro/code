let day = 'domingo';
day = 'quarta';

if(day == 'domingo') {
    console.log('Eu vou para a praia.');
} else {
    console.log('Eu vou ficar em casa.');
}

console.log('---');

if(day == 'domingo') {
    console.log('Eu vou para a praia.');
} else if (day == 'sexta') {
    console.log('Eu vou para o cinema.');
} else {
    console.log('Eu vou ficar em casa.');

}

console.log('---');

let num = parseInt(Math.random() * (10 - 1) + 1);
let value = num <= 9 ? '0' + num : num;
console.log(value);

console.log('---');

let random = (min, max) => { return Math.random() * (max - min) + min; }
console.log(random(1, 10));