const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')
const validateToken = require('../middleware/auth.middleware')

router.post('/reg', UserController.reg )
router.post('/login',UserController.login)
router.get('/auth',validateToken, UserController.check )

module.exports = router