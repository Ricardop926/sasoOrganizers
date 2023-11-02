
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

const fileFilter = (req, file, cb) => {
    // Definir aquí las reglas para filtrar los tipos de archivos permitidos
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
      cb(null, true); // Aceptar el archivo
    } else {
      cb(new Error('Formato de archivo no válido'), false); // Rechazar el archivo
    }
  };
  

  module.exports = storage;