const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    const route = express.Router()
    server.use('/api', route)

    const BillingCicle = require('../api/billingCycle/billingCycleService')
    BillingCicle.register(route, '/BillingCicles')

    const openApi = express.Router()
    server.use('/oapi', openApi)
    /* Fora do token */
    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}