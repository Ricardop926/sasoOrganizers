const express1 = require('express');
const port1  = process.env.PORT || 8000;
const {urlencoded , json} = require('express')
const path1 = require('path')
const cors1 = require('cors');



// inizialization
const app1 = express1()

//settig
app1.set('port', port1)

//middleswares
app1.use(cors1());
app1.use(urlencoded({extended:true}))
app1.use(json())

//routes
app1.use('/books',require('./routes/books.routes'))

// public static files

 app1.use(express1.static(path1.join(__dirname,'../static')))
 module.exports = app1
