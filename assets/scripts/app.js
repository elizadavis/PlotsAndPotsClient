'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const plantEvents = require('./plants/events')
const plotEvents = require('./plots/events')
const potEvents = require('./pots/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#plants-index').on('click', plantEvents.onGetPlants)
  $('.results').on('click', '.btn-danger', plantEvents.onDeletePlant)
  $('#plants-create').on('submit', plantEvents.onCreatePlant)
  $('.results').on('submit', '.plants-update', plantEvents.onUpdatePlant)
  $('.results').on('submit', '.add-plot', plotEvents.onCreatePlot)
  $('#plots-index').on('click', plotEvents.onGetPlots)
  $('.plot-results').on('click', '.btn-danger', plotEvents.onDeletePlot)
  $('.results').on('submit', '.add-pot', potEvents.onCreatePot)
  $('#pots-index').on('click', potEvents.onGetPots)
  $('.pot-results').on('click', '.btn-danger', potEvents.onDeletePot)
  // $('#all-index').on('click', plantEvents.onGetAll)
})
