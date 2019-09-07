const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = {
    login(req, res){
        const {username, password} = req.body
        if(username == 'admin' && password == 'admin') {
            const token = jwt.sign(username, env.authSecret)
            res.json({token})
        } else {
            res.status(400).json({error: 'Username/password does not match'})
        }
    }
}