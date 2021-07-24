const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')

router.get('/profile', usersController.profile)
router.get('/signup', usersController.SignUp)
router.get('/signin', usersController.SignIn)

router.post('/create', usersController.create)
router.post('/create-session', usersController.createSession)

router.get('/signout', usersController.Signout)

module.exports = router