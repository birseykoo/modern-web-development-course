const accessControl = (req, res, next) => {
    const access = true;
    if(!access){
        res.json({
            success: false,
            message: "You are not authorized"
        });
    }else{
        next();
    }
    console.log("Access-Control-Allow-Origin: *");
    next();
};
module.exports = {accessControl};