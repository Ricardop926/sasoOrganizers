const route = require('express').Router()
const storage = require('../../../config/multer')
const multer = require('multer')
const uploader = multer({storage})

const { getInicializarionData, getOneProject, getOneService, getProjects,getOnePData, getServices,getpData, newProjects, newService,newPData } = require('../controller/book.controller')


route.get('/getInicializationData', getInicializarionData)
route.get('/getOneProject/:id_projects', getOneProject)
route.get('/getOneService/:id_services', getOneService)
route.get('/getOnePData/:id_personaData', getOnePData)

route.get('/getProjects', getProjects)


 route.get('/getServices', getServices)

 route.get('/getpData', getpData)

 route.post('/newProjects', uploader.single('file'), newProjects)

route.post('/newService', uploader.single('file'), newService)

route.post('/newPData', uploader.single('file'), newPData)


module.exports = route
