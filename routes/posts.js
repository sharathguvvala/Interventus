const express = require('express')
const router = express.Router()
const passport  = require('passport')

const postController = require('../controllers/postController')

router.post('/create',passport.checkAuth,postController.create)
router.get('/destroy/:id',passport.checkAuth,postController.destroy)

module.exports = router