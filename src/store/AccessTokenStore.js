let accessToken = window.localStorage.getItem('token') || null

export const getAccessToken = () => accessToken

export const setAccessToken = (token, userId) => {
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('userId', userId)
  window.location.assign('/')
  accessToken = token
}

export const logout = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('userId')
  window.location.assign('/')
}