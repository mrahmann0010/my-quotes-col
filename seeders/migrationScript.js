// For Adding uploader reference in the quote

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const QuotesByOther = require("../models/quotesByOtherModel");
const Uploader = require('../models/uploadersModel');

let count = 0;

dotenv.config({path:'./config.env'});

const migrationScript = async () => {
    try {
        // Get all Quotes
        const quotes = await QuotesByOther.find();
        // console.log(`found ${quotes.length} quotes`);
        // Search for each Quotes
        for(let quote of quotes) {
            const uploader = await Uploader.findOne({name:quote.uploadedBy.toLowerCase()});
            if(uploader) {
                quote.uploader = uploader._id; //Set Reference
                await quote.save();
                count++;
                console.log(`Quote modified ${count}`);
                console.log(`✅ Updated quote by "${quote.uploadedBy}" with uploader "${uploader._id}"`);
            }
        }
        process.exit();
    } catch (error) {
        console.log("Migration Script Error", error);
        process.exit(1);
    }
}

const DB = (process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASS));
mongoose.connect(DB)
.then( async ()=> {
    console.log('Database Connected!');

    await migrationScript();
    console.log("Migration Finished");
})
.catch((err)=>{
    console.error('❌ Error inserting authors:', err);
    process.exit(1);
});