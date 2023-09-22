const route1 = require('express').Router()
const {getInicializationData, getOneBook,newBook} = require('../controllerGallety/book.controller')
//para traer datos de inicialización
route1.get('getInicializationData', getInicializationData)
route1.get('getOneBook', getOneBook)

// para enviar los libros a la base de datos
route1.post('newBook', newBook)


route1.get('/prueba', (req, res) => {
    res.json({message : 'this is a message'})
})

module.exports = route1 