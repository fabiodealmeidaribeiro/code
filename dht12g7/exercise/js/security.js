let check = () => {
    let name = document.getElementById('name').value;
    let guests = ['amanda', 'sabrina', 'rafaela', 'jonas', 'carol', 'jhonatan'];
    document.getElementById('permission').innerText = guests.includes(name) ? 'Pode!' : 'Não pode!';
}
let permission = document.getElementsByClassName('permission');
console.log(permission.length);