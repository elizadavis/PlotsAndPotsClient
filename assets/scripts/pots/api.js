'use strict'

const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/pots',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = (id) => {
  return $.ajax({
    url: config.apiUrl + '/pots/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/pots/' + formData.plot.id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/pots',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  destroy,
  update,
  create
}
