document.getElementById('change').addEventListener('click', change);

function change(){
    const usd = new XMLHttpRequest();
    const euro = new XMLHttpRequest();
    usd.open('GET', 'http://www.floatrates.com/daily/usd.json', true);
    euro.open('GET', 'http://www.floatrates.com/daily/eur.json', true);
    // xhr.onload = function(){
    //     if(this.status){
    //         console.log(this.responseText);
    //         const response = JSON.parse(this.responseText);
    //         // console.log(response.try);
    //         // console.log(typeof document.getElementById('amount').value);
    //         const rate = response.try.rate;
    //         console.log(rate);
    //         const usd = document.getElementById('usd').value;
    //         const result = usd * rate;
    //         console.log(result);
    //         // const amount = Number(document.getElementById('amount').value);
    //         // document.getElementById('tl').innerHTML = amount * rate;

    //     }
    // }
    usd.onload = function(){
        if(this.status){
            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            // console.log(response.try);
            // console.log(typeof document.getElementById('amount').value);
            const rate = response.try.rate;
            // console.log(rate);
            const usd = document.getElementById('usd').value;
            document.getElementById('tl').value = usd * rate;
        }
    }
    euro.onload = function () {
        if (this.status) {
            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            // console.log(response.try);
            // console.log(typeof document.getElementById('amount').value);
            const rate = response.try.rate;
            // console.log(rate);
            const euro = document.getElementById('euro').value;
            document.getElementById('tl').value = euro * rate;
        }
    }
    usd.send();
    euro.send();
}