'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').html('signed up successfully!')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('sign up failed')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignInSuccess = responseData => {
  $('#message').text('signed in')
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('sign in failed')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Password changed successfully!')
  $('#change-pw input[type="password"]').val('')
}

const onChangePasswordFailure = () => {
  $('#message').text('Unable to change password')
  $('#change-pw input[type="password"]').val('')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully')
  $('#signup-in').show()
  $('#loggedin').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').text('Unable to sign out')
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
