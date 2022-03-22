console.log(location.href);
console.log(location.origin);
console.log(location.protocol);
// location.reload();
let URLSearch = new URLSearchParams(location.search);
// http://localhost:3000/lab/m?v=FABIO
console.log(URLSearch.has('v'));
// TRUE
console.log(URLSearch.get('v'));
// FABIO