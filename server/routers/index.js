const express = require('express')
const router = express.Router()
const userRouter = require('../routers/user.router')
const postRouter = require('../routers/post.router')

router.use('/user/', userRouter)
router.use('/posts/', postRouter)

module.exports = router