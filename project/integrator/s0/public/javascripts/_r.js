import {
    getSelector,
} from './main.js';
getSelector('#searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let array = [];
    let status;
    fetch(`https://api.github.com/users/${ getSelector('input[name=\"key\"]')['value'] }/repos`).then(result => {
        status = result.status;
        return result.json();
    }).then(result => {
        if (status === 200) {
            result.forEach((element) => {
                array.push({ 
                    name : element['name'],
                    html_url : element['html_url'],
                });
            });
            getSelector('#repositories')['innerHTML'] = '';
            for (let i = 0; i <= Number(array['length'] - 1); i++) {
                let html = '';
                html += '<h6 class=\"card-title\" style=\"display: inline;\">';
                    html += '<a href=\"' + array[i]['html_url'] + '\" target=\"_blank\">';
                        html += array[i]['name'];
                    html += '</a>';
                    html += i < Number(array['length'] - 1) ? ', ' : '.';
                html += '</h6>';
                getSelector('#repositories')['innerHTML'] += html;
            }
            // array.forEach(index => {
            //     let html = '';
            //     html += '<h6 class=\"card-title\" style=\"display: inline;\">';
            //         html += '<a href=\"' + index['html_url'] + '\" target=\"_blank\">';
            //             html += index['name'];
            //         html += '</a>';
            //         html += ', ';
            //     html += '</h6>';
            //     getSelector('#repositories')['innerHTML'] += html;
            // });
        } else if (status === 404) {
            let html = '';
            html += '<h6 class=\"card-title\" style=\"display: inline;\">';
                html += 'The repository (';
                    html += getSelector('input[name=\"key\"]')['value'];
                html += ') is not found!';
            html += '</h6>';
            getSelector('#repositories')['innerHTML'] = '';
            getSelector('#repositories')['innerHTML'] = html;
        };
    });
});