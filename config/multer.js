
const multer = require('multer')
const path = require('path')// para redireccionar el guardado de la imagen

const storage = multer.diskStorage({
destination: function(req, file, cb) {
cb(null, path.join(__dirname, '../static/image'))
},
filename: function(req, file, cb) {
cb(null, `image${Date.now()}.${file.mimetype.split('/')[1]}`)
}

// image/jpg asi manda la funcion la imagen
})

module.exports = storage