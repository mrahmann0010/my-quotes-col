const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    quote:{
        type:String,
        required:[true, 'Entry must contain a quote'],
        unique:true,
    },
    author:{
        type:String,
        required:[true, 'A quote must have an author']
    },

    authorId:{
        type:String,
        required:[true, 'A quote must have an author'],
    }

});

const Quotes = mongoose.model('Quote', quotesSchema);

module.exports = Quotes;