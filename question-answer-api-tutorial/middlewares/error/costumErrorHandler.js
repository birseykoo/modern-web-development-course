const CustomError = require('../../helpers/error/CustomError');
const costumErrorHandler = (err, req, res, next) => {
    let customError = err;
    // console.log(err.name);
    if (err.name === 'SyntaxError') {
        customError = new CustomError("Unexpected Error", 400);
    }
    if (err.name === 'ValidationError') {
        customError = new CustomError(err.message, 400);
    }
    // console.log(customError.message,customError.status);
    if (err.code === 11000) {
        customError = new CustomError("Duplicate key error : Check Your Input", 400);
    }
    res.status(customError.status || 500).json({
        success: false,
        message: customError.message // || "Internal Server Error"
    });
};

module.exports = costumErrorHandler;