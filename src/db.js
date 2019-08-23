const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://admin:admin@picocluster-h68ia.mongodb.net/test?retryWrites=true&w=majority',//'mongodb://localhost/picosite',//
{
    useNewUrlParser: true
})