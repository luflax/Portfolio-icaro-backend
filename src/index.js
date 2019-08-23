const express = require('express')
const cors = require('cors')

const router = require('./routes')
//const db = require('./db')

const server = express()
const port = process.env.PORT || 3333


server.use(express.static('./public'))
server.use(express.json())
server.use(cors())
server.use(router)

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})