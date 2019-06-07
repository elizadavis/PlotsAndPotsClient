'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').html('signed up successfully!')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignUpFailure = responseData => {
  $('#message').html('sign up failed')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignInSuccess = responseData => {
  $('#message').html('signed in')
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').html('sign in failed')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
}

const onChangePasswordSuccess = () => {
  $('#message').html('password changed successfully!')
  $('#change-pw input[type="password"]').val('')
}

const onChangePasswordFailure = () => {
  $('#message').html('unable to change password')
  $('#change-pw input[type="password"]').val('')
}

const onSignOutSuccess = () => {
  $('#message').html('signed out successfully')
  $('#signup-in').show()
  $('#loggedin').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').html('sign out failed')
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
