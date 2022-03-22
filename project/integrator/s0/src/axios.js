const userSearch = async (userName) => {  
    return await require('axios').get('https://api.github.com/users/' + `${ userName }`);
};
console.log(userSearch('vtorres96'));