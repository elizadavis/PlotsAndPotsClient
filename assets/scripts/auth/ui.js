'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  setTimeout(() => $('#message').text(''), 5000)
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed')
  setTimeout(() => $('#message').text(''), 5000)
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  setTimeout(() => $('#message').text(' '), 5000)
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#plant-controls').removeClass('hidden')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed')
  setTimeout(() => $('#message').text(''), 5000)
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Password changed successfully!')
  setTimeout(() => $('#message').text(''), 5000)
  $('#change-pw input[type="password"]').val('')
}

const onChangePasswordFailure = () => {
  $('#message').text('Unable to change password')
  setTimeout(() => $('#message').text(''), 5000)
  $('#change-pw input[type="password"]').val('')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully')
  setTimeout(() => $('#message').text(''), 5000)
  $('#signup-in').show()
  $('#loggedin').addClass('hidden')
  $('.results').addClass('hidden')
  $('.plot-results').addClass('hidden')
  $('.pot-results').addClass('hidden')
  $('.plot-msg').addClass('hidden')
  $('.pot-msg').addClass('hidden')
  $('.index-msg').addClass('hidden')
  $('#plots-msg').addClass('hidden')
  $('#pots-msg').addClass('hidden')
  $('#plant-controls').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').text('Unable to sign out')
  setTimeout(() => $('#message').text(''), 5000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
