'use strict'

let apiUrl
const apiUrls = {
  // Rails:
  // production: 'https://frozen-brook-76070.herokuapp.com',
  production: 'https://thawing-river-79921.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
