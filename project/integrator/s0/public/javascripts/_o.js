fetch('https://api.thecatapi.com/v1/votes', {
    method : 'POST',
    headers : {
        // MIME type
        'Content-Type' : 'application/json',
        'x-api-key' : 'fe3dcddf-fe95-4f7d-9945-a80560071e62',
    },
    body : JSON.stringify({
        image_id : 'bi',
        value : 1,
    }),
}).then((result) => {
    return result.json();
}).then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
});