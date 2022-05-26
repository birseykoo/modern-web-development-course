// function getTextFile(){ // Local Text Dosyası
//     // console.log(this.fech)

//     fetch("example.txt").then(response => {
//         return response.text()
//     }).then(text => {
//         console.log(text)
//     }).catch(err => {
//         console.log(err)
//     });
// }
// // console.log(getTextFile());
// getTextFile();

// function getJsonFile(){ // Local Json Dosyası
//     fetch("example.json").then(response => {
//         return response.json()
//     }).then(json => {
//         console.log(json)
//     }).catch(err => {
//         console.log(err)
//     });
// }

// getJsonFile();

// function getUrlFile(){ // Url Uzak Sunucudan Dosya
//     fetch("http://www.floatrates.com/daily/try.json").then(response => {
//         return response.json()
//     }).then(json => {
//         console.log(json.usd.rate)
//     }).catch(err => {
//         console.log(err)
//     });
// }

// getUrlFile();


class Request{
    get(url){
        // fetch(url).then(response => response.text()).then(data => console.log(data)).catch(err => console.log(err));
        // fetch(url).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        });
    }
    post (url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            }).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        });
    }
    put (url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            }).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        });
    }
    delete (url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            }).then(response => response.json()).then(data => resolve("Veri silme işlemi başarılı")).catch(err => reject(err));
        });
    }
}

const request = new Request();
// let album;
// request.get("https://jsonplaceholder.typicode.com/albums").then(album => {
//     // album = data;
//     console.log(album);
// }).catch(err => console.log(err));

// console.log(album); // undefined

request.post("https://jsonplaceholder.typicode.com/albums", {
    userId: 1,
    title: "My First Album",
}).then(album => {
    console.log(album);
}
).catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/1", {
    userId: 1,
    title: "You First Album",
}).then(album => {
    console.log(album);
}
).catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1").then(album => {
    console.log(album);
}
).catch(err => console.log(err));
