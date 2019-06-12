'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('signed up successfully!')
  setTimeout(() => $('#message').text(''), 5000)
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('sign up failed')
  setTimeout(() => $('#message').text(''), 5000)
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignInSuccess = responseData => {
  $('#message').text('signed in')
  setTimeout(() => $('#message').text(''), 5000)
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('sign in failed')
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
