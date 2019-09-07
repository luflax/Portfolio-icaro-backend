const jwt = require('jsonwebtoken')
const env = require('./.env')

module.exports = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['authorization']
    if(!token){
        res.status(403).json({error: 'Authorization token was not provided.'})
    }
    
    jwt.verify(token, env.authSecret, (err, decoded) => {
        if(err) {
            res.status(403).json({error: 'Invalid token.'})
        } else {
            next();
        }
    })
}