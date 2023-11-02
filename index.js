const app = require('./src/app/app')

app.listen(app.get('port'), (err) => {
    if(err) {
        console.log(`there was an error : ${err}`)
    }else {
        console.log(`server running on port ${app.get('port')}`)
    }
})
///nodemailer y envio de correos

const express1 = require('express');
const app1 = express1();
let cors1 = require('cors');
const bodyparser1 = require('body-parser')




app1.use(cors1())
app1.use(bodyparser1.json())
app1.use(bodyparser1.urlencoded({extends:false}))

app1.use(require('./src/app/routes/correoRotes'))

app1.listen('3000',()=>{
    console.log('escuchando')
})
console.log('aqui estoy')


