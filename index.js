const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser')
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extends:false}))

app.use(require('./routes/correoRotes'))

app.listen('3000',()=>{
    console.log('escuchando')
})
