class Currency {
    constructor(firstCurrency, secondCurrency) {

        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = 'http://www.floatrates.com/daily/';
        this.amount = null;
    }
    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency + ".json")
                .then(response => response.json())
                .then(data => {
                    const parity = data[this.secondCurrency].rate;
                    const result = this.amount * parity;
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
        });
    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }

}

