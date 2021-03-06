import axios from 'axios'
import { getAccessToken, logout } from '../store/AccessTokenStore'
import API_URL from '../constants/constants'

export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: API_URL,
    ...opts
  })

  http.interceptors.request.use(request => {
    if (opts.useAccessToken !== false) {
      request.headers.common.Authorization = `Bearer ${getAccessToken()}`
    } else {
      delete request.headers.common.Authorization
    }

    return request
  })

  http.interceptors.response.use(
    response => response.data,
    error => {
      if (error.response && [401, 403].includes(error.response.status)) {
        logout()
      }

      return Promise.reject(error)
    }
  )

  return http
}