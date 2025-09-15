const mongoose = require('mongoose');

const uploaderSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        lowercase:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
    },
    profilePic:{
        type:String,
        default:'',
    },
    bio:{
        type:String,
        trim:true,
        default:'',
    },       
}, {
    timestamps:true
});

const Uploader = mongoose.model('Uploader', uploaderSchema);

module.exports = Uploader;