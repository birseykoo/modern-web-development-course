const CustomError = require("../../helpers/error/customError");
const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessTokenFromHeader } = require("../../helpers/authorization/tokenHelpers");

const getAccsessToRoute = (req, res, next) => {
    const JWT_SECRET_KEY = process.env;
    const access_token = getAccessTokenFromHeader(req);
    if (!isTokenIncluded(req)) {
        return next(new CustomError("Please login to continue", 401));
    }

    jwt.verify(access_token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new CustomError("Please login to continue", 401));
        }
        req.user = {
            id: decoded.id,
            name: decoded.name,
        }
        next();

    });
}




module.exports = {
    getAccsessToRoute
};