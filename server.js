const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Loading environment variables
dotenv.config({path:'./config.env'});

// DB
const DB = (process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASS));
console.log(DB);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Database Connected!'))
.catch((err)=>console.error('MongoDB connection Error', err));

// const quotesSchema = new mongoose.Schema({
//   quote:{
//     type:String,
//     required:[true, 'Must have a quote body'],
//     unique:true,
//   }
// });

// const Quote = mongoose.model('Quote', quotesSchema);

// const testQuote = new Quote({
//   quote:"Far from the Madding Crowd"
// });

// testQuote.save()
// .then((doc)=> console.log(doc))
// .catch((err)=> console.log("Error :", err));


app.listen(process.env.PORT, ()=>{
    console.log(`App running on PORT ${process.env.PORT}`);
});