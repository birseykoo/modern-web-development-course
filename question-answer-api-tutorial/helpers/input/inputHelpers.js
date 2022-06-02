const bcrypt = require('bcrypt');
const validateUserInput = (email, password) => {
    return email && password ? true : false;
}
const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    validateUserInput,
    comparePassword
}