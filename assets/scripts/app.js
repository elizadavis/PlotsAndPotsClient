'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const plantEvents = require('./plants/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#sidebarCollapse').on('click', function () {
  //   $('#sidebar').toggleClass('active')
  // })
  $('#plants-index').on('click', plantEvents.onGetPlants)
  $('#plants-show').on('submit', plantEvents.onGetPlant)
  $('#plants-delete').on('submit', plantEvents.onDeletePlant)
  $('#plants-update').on('submit', plantEvents.onUpdatePlant)
  $('#plants-create').on('submit', plantEvents.onCreatePlant)
})
