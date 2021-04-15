const multer = require('multer')
const router = require('express').Router()
const upload = multer(
    {
        dest: 'images'
    }
)

router.post('/upload', upload.single('upload'), (req,resp) =>{
    resp.send()
})


module.exports = router