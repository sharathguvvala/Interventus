const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')

router.get('/profile', usersController.profile)
router.get('/signup', usersController.SignUp)
router.get('/signin', usersController.SignIn)

module.exports = router