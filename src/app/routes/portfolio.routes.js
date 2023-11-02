const route = require('express').Router()
const storage = require('../../../config/multer')
const multer = require('multer')
const uploader = multer({storage})

const { getInicializarionData, getOneProject, getOneService, getOnePData, getOneBlog, getProjects, getServices,getpData,getBlog, newProjects, newService,newPData,newBlog} = require('../../app/controller/book.controller')


route.get('/getInicializationData', getInicializarionData)
route.get('/getOneProject/:id_projects', getOneProject)
route.get('/getOneService/:id_services', getOneService)
route.get('/getOnePData/:id_personaData', getOnePData)
route.get('/getOneBlog/:id_blog', getOneBlog)

route.get('/getProjects', getProjects)


 route.get('/getServices', getServices)

 route.get('/getpData', getpData)

 route.get('/getBlog', getBlog)

 route.post('/newProjects', uploader.single('file'), newProjects)

route.post('/newService', uploader.single('file'), newService)

route.post('/newPData', uploader.single('file'), newPData)
route.post('/newBlog', uploader.single('file'), newBlog)




module.exports = route
