'use strict'
// need to pass in event in order to access methods on it
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
// const plantEvents = require('../plants/events')

const onGetPlots = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    // .then(() => plantEvents.onGetPlants(event))
    .catch(ui.onFailure)
}

const onCreatePlot = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(() => onGetPlots(event))
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}

const onDeletePlot = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(() => onGetPlots(event))
    .then(ui.onDestroySuccess)
    .catch(ui.onFailure)
}

const onUpdatePlot = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(() => onGetPlots(event))
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onGetPlots,
  onDeletePlot,
  onUpdatePlot,
  onCreatePlot
}
