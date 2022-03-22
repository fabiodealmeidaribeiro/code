const bestCourse = (result) => {
    return new Promise((resolve, reject) => {
        if (result === 'wfs') {
            resolve({
                success : true,
                message : 'you got it!',
            });
        } else {
            reject({
                success : false,
                message : 'you were wrong!',
            });
        };
    });
};

const bestClasses = (result) => {
    return new Promise((resolve, reject) => {
        if (result['success']) {
            resolve({
                success : true,
            });
        } else {
            reject({
                success : false,
            });
        };
    });
};

// let index = bestCourse('wf0s').then((firstAnswer) => {
//     return bestClasses(firstAnswer);
// }).then((secondAnswer) => {
//     return secondAnswer;
// }).catch((error) => {
//     return error;
// });

const index = bestCourse('wfs').then((result) => {
    return result;
}).catch((result) => {
    return result;
});

console.log(index);