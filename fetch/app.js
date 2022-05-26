function getTextFile(){ // Local Text Dosyası
    // console.log(this.fech)

    fetch("example.txt").then(response => {
        return response.text()
    }).then(text => {
        console.log(text)
    }).catch(err => {
        console.log(err)
    });
}
// console.log(getTextFile());
getTextFile();

function getJsonFile(){ // Local Json Dosyası
    fetch("example.json").then(response => {
        return response.json()
    }).then(json => {
        console.log(json)
    }).catch(err => {
        console.log(err)
    });
}

getJsonFile();

function getUrlFile(){ // Url Uzak Sunucudan Dosya
    fetch("http://www.floatrates.com/daily/try.json").then(response => {
        return response.json()
    }).then(json => {
        console.log(json.usd.rate)
    }).catch(err => {
        console.log(err)
    });
}

getUrlFile();