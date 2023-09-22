const route1 = require('express').Router()



route1.get('/prueba', (req, res) => {
    res.json({message : 'this is a message'})
})




module.exports = route1 