const express = require('express')
const router = express.Router()
const passport = require('passport')

const usersController = require('../controllers/usersController')

router.get('/profile/:id', passport.checkAuth, usersController.profile)
router.post('/update/:id', passport.checkAuth, usersController.update)

router.get('/signup', usersController.SignUp)
router.get('/signin', usersController.SignIn)

router.post('/create', usersController.create)
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/users/signin'}), usersController.createSession)
router.get('/signout', usersController.Signout)

module.exports = router