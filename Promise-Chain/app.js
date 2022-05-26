// function getDate(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             reject("olumsuz");
//         }, 5000);
//     });
// }

// // getDate("Merhaba").then(function(response){
// //     console.log(response);
// // }
// // );
// getDate("Merhaba").catch(function(err){
//     console.log(err);
// });

// function getDate(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 resolve(data);
//             } else {
//                 reject(new Error("Stirng olmalıdır"));
//             }
//         }, 5000);
//     });
// }

// getDate(123).then(function (response) {
//     console.log(response);
// }).catch(function (err) {
//     console.error(err);
// });


// getDate("23").then(response => {
//     console.log(response);
// }).catch(err => {
//     console.error(err);
// });



function addTwo(number){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (typeof number === "number") {
                resolve(number + 2);
            }
            else{
                reject(new Error("Number olmalıdır"));
            }
        }, 5000);
    });
}

addTwo(2).then(response => {
    console.log(response);
    return response + 2;
}
).then(response2 => {
    console.log(response2);
}
).catch(err => {
    console.error(err);
});