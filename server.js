const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Loading environment variables
dotenv.config({path:'./config.env'});

const PORT = process.env.PORT || 8080;

// DB
const DB = (process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASS));

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Database Connected!'))
.catch((err)=>console.error('MongoDB connection Error', err));


app.listen(process.env.PORT, ()=>{
    console.log(`App running on PORT ${process.env.PORT}`);
});