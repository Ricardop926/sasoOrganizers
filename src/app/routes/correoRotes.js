const express2 = require('express')
const app2 = express2();

let envio = require('../controller/correoController')

app2.post('/envio', envio.envioCorreo)

module.exports = app2