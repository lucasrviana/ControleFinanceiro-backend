const express = require('express')

module.exports = function(server) {

    const route = express.Router()
    server.use('/api', route)

    const BillingCicle = require('../api/billingCycle/billingCycleService')
    BillingCicle.register(route, '/BillingCicles')
}