export class Request {
    constructor(url){
        this.url = url;
    }
    async get(){
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }
    async post (data){
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    }
    async put (id,data){
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    }
    async delete (id){
        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        return result,"Veri Sİlindi";
    }
}