let day  = 'sunday';

if (day == "sunday") {
    console.log("...");
} else if (day == "monday") {
    console.log("...");
} else if (day == "tuesday") {
    console.log("...");
} else {
    console.log("...");
}

switch(day) {
    case 'sunday':
        console.log('...');
    break;
    case 'monday':
        console.log('...');
    break;
    case 'tuesday':
        console.log('...');
    break;
    case 'wednesday':
        console.log('...');
    break;
    case 'thursday':
        console.log('...');
    break;
    case 'friday':
        console.log('...');
    break;
    case 'saturday':
        console.log('...');
    break;
    default:
        console.log('...');
    break;
}

let result = day == 'sunday' ? 'I will go to the beach.' : 'I will stay at home.';

console.log(result);