const app1 = require('./appGlry/appG')

app1.listen(app1.get('port'),(err) =>{
    if(err){
        console.log(`tehere was an error : ${err}`)
    }

    else {
        console.log(`server running on port ${app1.get('port')}`)
    }
}
)


///nodemailer y envio de correos

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
console.log('aqui estoy')