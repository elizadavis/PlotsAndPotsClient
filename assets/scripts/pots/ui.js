'use strict'

const showPotsTemplate = require('../templates/pot-listing.handlebars')

const onIndexSuccess = (responseData) => {
  const potHtml = showPotsTemplate({ pots: responseData.pots })
  $('#pots-msg').removeClass('hidden')
  // $('.index-msg').text('All Plots')
  // $('.plant-results').addClass('hidden')
  $('.pot-results').removeClass('hidden')
  $('.pot-results').html(potHtml)
  $('form').trigger('reset')
}

const onDestroySuccess = () => {
  $('#message').text('You deleted a pot!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onCreateSuccess = () => {
  $('#message').text('You created a pot!')
  setTimeout(() => $('#message').text(''), 5000)
}

const onUpdateSuccess = () => {
  $('#message').text('You updated a pot!')
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
