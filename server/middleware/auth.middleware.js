const {verify} = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const accessToken = req.header("accessToken")
    if(!accessToken)
    return res.json({
        error: "User not logged"
    })

    try {
        const validToken = verify(accessToken, process.env.SECRET_KEY)
        req.user = validToken
        if(validToken){
            return next()
        }
    } catch (error) {
        return res.json({
            error:"not authorized"
        })
    }
}


