const path = require('path');
const express = require('express');
const app = express();

const publicDirectory = path.join(__dirname, './public');
// Using Middleware
// app.use(express.json());
app.use(express.static(publicDirectory));


app.get('/quotes', (req, res)=>{
    res.send({
        name:'Jibananda',
        quote:'Life is difficult'
    });
});


module.exports = app;