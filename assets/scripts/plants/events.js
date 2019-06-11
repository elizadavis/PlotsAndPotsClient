'use strict'
// need to pass in event in order to access methods on it
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')

const onGetPlants = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onFailure)
}

const onGetPlant = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.show(formData.plant.id)
    .then(ui.onShowSuccess)
    .catch(ui.onFailure)
}

const onCreatePlant = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onFailure)
}

const onDeletePlant = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(() => onGetPlants(event))
    .catch(ui.onFailure)
}

const onUpdatePlant = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onGetPlants,
  onGetPlant,
  onDeletePlant,
  onUpdatePlant,
  onCreatePlant
}
