const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let dbUrl = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    dbUrl = 'mongodb://localhost/picosite'
else
    dbUrl = 'mongodb+srv://admin:admin@picocluster-h68ia.mongodb.net/test?retryWrites=true&w=majority'

module.exports = mongoose.connect(dbUrl, {
    useNewUrlParser: true
})