const express = require('express');
const mongoose = require('mongoose');

// Loading environment variables
// dotenv.config();

const app = express();

// Using Middleware
app.use(express.json());




const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`App running on PORT ${PORT}`);
});