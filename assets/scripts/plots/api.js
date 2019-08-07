'use strict'

const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/plots',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = (id) => {
  return $.ajax({
    url: config.apiUrl + '/plots/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/plots/' + formData.plot.id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/plots',
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
