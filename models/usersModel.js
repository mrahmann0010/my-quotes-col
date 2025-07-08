const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'User must provide a name!'],
        trim:true,
    },
    email:{
        type:String,
        required:[true, 'User must provide an email!'],
        trim:true,
        lowercase:true,
        unique:true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address!'],
        validate:[validator.isEmail, 'Please provide a valid email'],

    },
    password:{
        type:String,
        required:[true, 'User must set a Password'],
        trim:true,
        minLength:6,
        select:false
    },
    confirmPassword:{
        type:String,
        required:[true, 'Please Confirm your Password'],
        // This will only work in save & create
        validate:{
            validator: function(conPass) {
                return conPass === this.password;
            },
            message:'Password & ConfirmPassword does not match'
        }
    },
    // gender:{
    //     type:String,
    //     enum:['Male', 'Female', 'Others'],
    //     default:'Others',
    // },
    role:{
        type:String,
        enum:['Reader', 'Admin', 'Moderator'],
        default:'Reader',
    },
    passwordChangedAt:{
        type:Date,
    }

}, { timestamps: true });

userSchema.pre('save',async function (next){
    if(!this.isModified('password')) return next();

    // Hash the password
    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;
    next();
});

// Instance for Matching Password and Confirm Password
userSchema.methods.comparePassword = async function (candidatePassowrd, userPassword) {
    return await bcrypt.compare(candidatePassowrd, userPassword);
};

// Check if user has changed Password
userSchema.methods.isPasswordChanged = function (jwtTimestamp) {
    if(this.passwordChangedAt){
        const passwordChangedTime = parseInt(this.passwordChangedAt.getTime()/1000, 10);
        // console.log('Logging from here:', passwordChangedTime, jwtTimestamp);
        return jwtTimestamp < passwordChangedTime;
    }
    
    return false;
}

const User = mongoose.model('User', userSchema);

module.exports = User;