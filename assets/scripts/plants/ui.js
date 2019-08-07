'use strict'

const showPlantsTemplate = require('../templates/plant-listing.handlebars')
// const showPlotsTemplate = require('../templates/plot-listing.handlebars')
// const showPotsTemplate = require('../templates/pot-listing.handlebars')

const onIndexSuccess = (responseData) => {
  const plantHtml = showPlantsTemplate({ plants: responseData.plants })
  $('.index-msg').removeClass('hidden')
  $('.index-msg').text('All Plants')
  $('.results').removeClass('hidden')
  $('.results').html(plantHtml)
  // $('.pot-results').addClass('hidden')
  // $('.plot-results').addClass('hidden')
  $('form').trigger('reset')
}

// const onAllIndexSuccess = (responseData) => {
//   const plantHtml = showPlantsTemplate({ plants: responseData.plants })
//   const plotHtml = showPlotsTemplate({ plots: responseData.plots })
//   const potHtml = showPotsTemplate({ pots: responseData.pots })
//   $('.index-msg').removeClass('hidden')
//   $('.index-msg').text('All Plants')
//   $('.results').removeClass('hidden')
//   $('.results').html(plantHtml)
//   $('.plot-results').removeClass('hidden')
//   $('.plot-results').html(plotHtml)
//   $('.pot-results').html(potHtml)
//   $('.pot-results').removeClass('hidden')
//   $('form').trigger('reset')
// }

const onDestroySuccess = () => {
  $('#message').text('You deleted a plant!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onCreateSuccess = () => {
  $('#message').text('You created a plant!')
  setTimeout(() => $('#message').text(''), 5000)
}

const onUpdateSuccess = () => {
  $('#message').text('You updated a plant!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onFailure = () => {
  $('#message').text('There was an error. Please try again.')
  setTimeout(() => $('.results').text(''), 5000)
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onCreateSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onFailure
  // onAllIndexSuccess
}
