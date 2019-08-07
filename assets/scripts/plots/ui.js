'use strict'

const showPlotsTemplate = require('../templates/plot-listing.handlebars')

const onIndexSuccess = (responseData) => {
  const plotHtml = showPlotsTemplate({ plots: responseData.plots })
  $('#plots-msg').removeClass('hidden')
  // $('.index-msg').text('All Plots')
  $('.plot-results').removeClass('hidden')
  $('.plot-results').html(plotHtml)
  // $('.pot-results').addClass('hidden')
  // $('.plant-results').addClass('hidden')
  $('form').trigger('reset')
}

const onDestroySuccess = () => {
  $('#message').text('You deleted a plot!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onCreateSuccess = () => {
  $('#message').text('You created a plot!')
  setTimeout(() => $('#message').text(''), 5000)
}

const onUpdateSuccess = () => {
  $('#message').text('You updated a plot!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onFailure = () => {
  $('#message').text('There was an error. Please try again.')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onCreateSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onFailure
}
