const multer = require('multer');
const path = require('path');
const CustomError = require('../../helpers/error/customError');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const rootDir = path.dirname(require.main.filename);
        cb(null, path.join(rootDir, '/public/uploads/'));
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1];
        req.sevedImageProfileImage = "image_" + req.user.id + "." + extension;
        cb(null, req.sevedImageProfileImage);
    }
});

const fileFilter = (req, file, cb) => {
    let allowedMineTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    if (allowedMineTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new CustomError('Invalid file type', 400));
    }
}

const profileImageUpload = multer({
    storage,
    fileFilter
});

module.exports = profileImageUpload;