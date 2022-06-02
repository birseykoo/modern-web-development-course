const User = require("../models/User");
const CustomError = require("../helpers/error/customError");
const asyncErrorWrapper = require('express-async-handler');
const { validateUserInput, comparePassword} = require("../helpers/input/inputHelpers");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");

const register = asyncErrorWrapper(async (req, res, next) => {

    const { name, email, password, role } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        role
    });
    sendJwtToClient(user, res);
    // const token = user.generateJWTFromUser();
    // console.log(token);
    // res.
    //     status(200)
    //     .json({
    //         success: true,
    //         data: user
    //     });
});

// Error Test
// const errorTest = (req, res, next) => {

//     return next(new SyntaxError('SyntaxError', 400));
// };

const getUser = (req,res,next)=>{
    res.json ({
        success:true,
        data : {
            id : req.user.id,
            name : req.user.name,
        }
    });
}
const login = asyncErrorWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    if (!validateUserInput(email, password)) {
        return next(new CustomError('Please check your inputs', 400));
    }
    const user = await User.findOne({ email }).select('+password');
    if (!comparePassword(password, user.password)) {
        return next(new CustomError('Please check your credentails', 400));
    }
    sendJwtToClient(user, res);
});
const logout = asyncErrorWrapper(async(req, res, next) => {
const {NODE_ENV} = process.env;
return res.status(200).cookie({
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: NODE_ENV === 'development' ? true : false,
}).json({
    success: true,
    message : 'Logout Successfully'
});
});
const imageUpload = asyncErrorWrapper(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Image Uploaded Successfully'
    });

});
module.exports = {
    register,
    getUser,
    login,
    logout,
    imageUpload
};
