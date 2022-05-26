// async function test(data){

//     // return data;

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("data");
//         }, 2000);
//     });

//     let response = await promise;

//     // console.log(response);
//     console.log("MERHABA");
// }

// // test("Merhaba"); // .then(data => console.log(data));
// test("Merhaba").then(response => console.log(response));


// async function test(data){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if(typeof data === "string"){
//             resolve(data);
//         }else{
//             reject("Data is not a string");
//         }}
//         , 2000);
//     });

//     const response = await promise;
//     return response;
// }

// test(1232).then(response => console.log(response)).catch(error => console.log(error));


// async function getCurrency(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }
// console.log(getCurrency("https://jsonplaceholder.typicode.com/albums").then(data => console.log(data)));


class Request{
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    async post(url, data){
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        return result;
    }
    async put(url, data){
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        return result;
    }
    async delete(url){
        const response = await fetch(url, {
            method: "DELETE"
        });
        const result = await response.json();
        return "Veri silindi";
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums").then(data => console.log(data)).catch(error => console.log(error));
request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Merhaba" }).then(data => console.log(data)).catch(error => console.log(error));
request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 1, title: "Merhaba" }).then(data => console.log(data)).catch(error => console.log(error));
request.delete("https://jsonplaceholder.typicode.com/albums/1").then(data => console.log(data)).catch(error => console.log(error));
