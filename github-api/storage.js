class Storage {
    static getSearchedUSersFormStorage() {
        let users;
        if (localStorage.getItem('users') === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem('users'));
        }
        return users;
    }
    static addSearchedUSersToStorage(user) {
        const users = Storage.getSearchedUSersFormStorage();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
    static removeSearchedUSersFromStorage(user) {
        localStorage.removeItem('users');

    }
}