'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV:             '"development"',
  ROOT_URL:             '"http://localhost"',
  API_PORT:             8081,
  PORT:     8080

})
