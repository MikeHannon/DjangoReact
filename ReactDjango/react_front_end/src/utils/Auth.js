// file: src/util/Auth.js
import axios from 'axios'
import _ from 'lodash'
import store from '../store'
import { setToken } from '../actions'
import { URL, LOGIN } from '../config/Api.js'

export function InvalidCredentialsException(message) {
  this.message = message
  this.name = 'InvalidCredentialsException'
}

export function login(username, password) {
  return axios({
    method: 'post',
    url: `${URL}${LOGIN}`,
    data: {
      password: 'helloworld',
      username: 'michaelhannon',
    },
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(function(response) {
      store.dispatch(setToken(response.data.token))
    })
    .catch(function(error) {
      // raise different exception if due to invalid credentials
      if (_.get(error, 'response.status') === 400) {
        throw new InvalidCredentialsException(error)
      }
      throw error
    })
}

export function loggedIn() {
  return store.getState().token == null
}
