import api from './api'

export const loginUser = (credentials) => {
  return api.post('/login', credentials)
}

export const getUserInfo = () => {
  return api.get('/info')
}

export const updateUserProfile = (userId, profileData) => {
  return api.put(`/perfil/${userId}`, profileData)
}

export const updateUserPassword = (userId, passwordData) => {
  return api.put(`/password/${userId}`, passwordData)
}

export const createUser = (userData) => {
  return api.post('/users', userData)
}

export const getPasantes = () => {
  return api.get('/pasantes')
}

export const getPasanteById = (id) => {
  return api.get(`/pasantes/${id}`)
}

export const updatePasante = (id, pasanteData) => {
  return api.put(`/pasantes/${id}`, pasanteData)
}
