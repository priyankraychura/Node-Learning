const multer = require('multer');

const Storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({storage: Storage}).single('image') // Selecting single image
// const upload = multer({storage: Storage}).array // selecting multiple image
// const upload = multer({storage: Storage}).fields // having multiple input fields in form

module.exports = upload