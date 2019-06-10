'use strict'

const onIndexSuccess = (responseData) => {
  $('.results').html('')
  responseData.plants.forEach(plant => {
    const plantHTML = `
      <p>Plant ID: ${plant.id}</p>
      <h3>${plant.name}</h3>
      <h4>${plant.location}</h4>
      <h4>${plant.plant_type}</h4>
      <hr>
    `
    $('.results').append(plantHTML)
  })
  $('form').trigger('reset')
}

const onShowSuccess = (responseData) => {
  const plant = responseData.plant
  const plantHTML = `
      <p>Plant ID: ${plant.id}</p>
      <h3>${plant.name}</h3>
      <h4>${plant.location}</h4>
      <h4>${plant.plant_type}</h4>
      <hr>
    `
  $('.results').append(plantHTML)
  $('form').trigger('reset')
}

const onDestroySuccess = () => {
  $('.results').html('<p>You deleted a plant!</p>')
  $('form').trigger('reset')
}

const onUpdateSuccess = (responseData) => {
  const plant = responseData.plant
  const plantHTML = `
      <p>Plant ID: ${plant.id}</p>
      <h3>${plant.name}</h3>
      <h4>${plant.location}</h4>
      <h4>${plant.plant_type}</h4>
      <hr>
    `
  $('.results').html(plantHTML)
  $('form').trigger('reset')
}

const onFailure = () => {
  $('.results').html('<p>There was an error. Please try again.</p>')
  setTimeout(() => $('.results').html(''), 5000)
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onFailure
}
