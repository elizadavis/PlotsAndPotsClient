'use strict'
// need to pass in event in order to access methods on it
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
// const plotEvents = require('../plots/events')

const onGetPots = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    // .then(() => plotEvents.onGetPlots(event))
    .catch(ui.onFailure)
}

const onCreatePot = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(() => onGetPots(event))
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}

const onDeletePot = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(() => onGetPots(event))
    .then(ui.onDestroySuccess)
    .catch(ui.onFailure)
}

const onUpdatePot = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(() => onGetPots(event))
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onGetPots,
  onDeletePot,
  onUpdatePot,
  onCreatePot
}
