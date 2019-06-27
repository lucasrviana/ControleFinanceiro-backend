
const port = 3033

const bodyparser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')
const allowCors = require('./cors')
const server = express()

server.use(bodyparser.urlencoded({extended: true}))
server.use(bodyparser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server