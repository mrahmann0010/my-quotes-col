const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

const Authors = require('../models/authorsModel');
const authorList = require('../data/authorsList');

const DB = (process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASS));
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then( async ()=> {
    console.log('Database Connected!');

    const result = await Authors.insertMany(authorList);
    console.log(`✅ Successfully inserted ${result.length} authors`);

    process.exit();
})
.catch((err)=>{
    console.error('❌ Error inserting authors:', err);
    process.exit(1);
});