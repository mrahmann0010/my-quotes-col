const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Author Must have a name']
    },
    authorId:{
        type:String,
        required:[true, 'Author Must have an ID']
    }
});

const Authors = mongoose.model('Authors', authorSchema);

module.exports = Authors;