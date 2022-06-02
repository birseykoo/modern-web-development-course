const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true,
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
    role : {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters'],
        required: [true, 'Password field is required'],
        select: false
    },
    createAt : {
        type: Date,
        default: Date.now
    },
    updateAt : {
        type: Date,
        default: Date.now
    },
    about : {
        type: String,
        default: '',
        maxlength: [500, 'About field must be less than 500 characters']
    },
    place: {
        type: String,
        default: '',
        maxlength: [100, 'Place field must be less than 100 characters']
    },
    website: {
        type: String,
        default: '',
        maxlength: [100, 'Website field must be less than 100 characters']
    },
    profileImage: {
        type: String,
        default: 'defualt.png',
    },
    blocked: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

// UserSchema methods
UserSchema.methods.generateJWTFromUser = function() {
    const { JTW_SECRET_KEY, JWT_EXPIRE } = process.env;
    const payload = {
        id: this._id,
        name: this.name,
    };
    const access_token = jwt.sign(payload, JTW_SECRET_KEY, { expiresIn: JWT_EXPIRE });
};

// Pre save hook
UserSchema.pre("save", function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);
        bcrypt.hash(this.password,salt, (err, hash) =>{
            if(err) next (err);
            this.password = hash;
            next();
        });
    });
});


module.exports = mongoose.model('User', UserSchema);