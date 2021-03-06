import axios from 'axios'
import store from '../store'
import { URL } from '../config/Api.js'

export const apiClient = function() {
  const token = store.getState().token
  const params = {
    baseURL: URL,
    headers: { Authorization: 'Token ' + token },
  }
  return axios.create(params)
}
