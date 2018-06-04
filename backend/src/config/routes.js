const express = require('express')

module.exports = function(server) {
  // Define base URL for all routes
  const router = express.Router()
  server.use('/api', router)

  // Billing Cycle Routes
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}