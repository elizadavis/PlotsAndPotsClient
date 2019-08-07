'use strict'
// need to pass in event in order to access methods on it
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
// const plotEvents = require('../plots/events')
// const potEvents = require('../pots/events')

const onGetPlants = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onFailure)
}

// const onGetAll = event => {
//   event.preventDefault()
//   api.index()
//     .then(() => onGetPlants(event))
//     .then(() => plotEvents.onGetPlots(event))
//     .then(() => potEvents.onGetPots(event))
//     .then(ui.onAllIndexSuccess)
//     .catch(ui.onFailure)
// }

const onCreatePlant = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(() => onGetPlants(event))
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}

const onDeletePlant = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(() => onGetPlants(event))
    .then(ui.onDestroySuccess)
    .catch(ui.onFailure)
}

const onUpdatePlant = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(() => onGetPlants(event))
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onGetPlants,
  onDeletePlant,
  onUpdatePlant,
  onCreatePlant
  // onGetAll
}
