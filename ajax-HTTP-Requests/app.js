class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    // Get request

    get(url,callback){
        this.xhr.open('GET', url, true);
        // console.log(this.xhr);
        // const temp = this;
        // this.xhr.onload = function(){
        //     if (temp.xhr.status === 200){
        //         console.log(temp.xhr.responseText);
        //     }
        // }

        // this.xhr.onload = () => {
        //     if (this.xhr.status === 200){
        //         console.log(this.xhr.responseText);
        //     }
        // }
        this.xhr.onload = () => {
            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback('Error: ',null);
            }
        }

        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open('POST', url);
        this.xhr.setRequestHeader('Content-type','application/json');
        this.xhr.onload = () => {
            if (this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback('Error: ',null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    put(url,data,callback){
        this.xhr.open('PUT', url);
        this.xhr.setRequestHeader('Content-type','application/json');
        this.xhr.onload = () => {
            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback('Error: ',null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open('DELETE', url);
        this.xhr.onload = () => {
            if (this.xhr.status === 200){
                callback(null,"Veri Silindi");
            }
            else{
                callback('Error: ',null);
            }
        }
        this.xhr.send();
    }
}

const request = new Request();
// request.get('https://jsonplaceholder.typicode.com/albums',function(err,response){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(response);
//     }
// });

// request.post('https://jsonplaceholder.typicode.com/albums',{userId:1,title:'Album 1'},function(err,response){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(response);
//     }
// });

// request.put('https://jsonplaceholder.typicode.com/albums/1',{userId:1,title:'Album 2'},function(err,response){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(response);
//     }
// });

request.delete('https://jsonplaceholder.typicode.com/albums/1',function(err,response){
    if (err){
        console.log(err);
    }
    else{
        console.log(response);
    }
});