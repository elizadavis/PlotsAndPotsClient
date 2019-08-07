'use strict'

const store = require('./../../store.js')

const userPlants = function (plantId) {
  if (store.user) {
    return store.user._id === plantId
  }
}

module.exports = userPlants
