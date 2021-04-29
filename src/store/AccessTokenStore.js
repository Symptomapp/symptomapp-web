let accessToken = window.localStorage.getItem('token') || null

export const getAccessToken = () => accessToken

export const setAccessToken = (token, userId) => {
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('userId', userId)
  window.location.assign('/')
  accessToken = token
}

export const setDemoToken = (token, userId) => {
  window.localStorage.setItem('token', 'xcvxxll9dam65iyucudlp0gz9hdnu4gz23qgex53kb')
  window.localStorage.setItem('userId', '608b059bb0c5e03328725385')
  window.location.assign('/')
  accessToken = token
}

export const logout = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('userId')
  window.location.assign('/')
}