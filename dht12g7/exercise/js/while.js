let num = 1;
while (num <= 10) {
    console.log((num <= 9 ? '0' + num : num) + ' : Eu estou dentro do while.');
    num++;
}
num = 1;
do {
    console.log((num <= 9 ? '0' + num : num) + ' : Eu estou dentro do while.');
    num++;
} while (num <= 10);