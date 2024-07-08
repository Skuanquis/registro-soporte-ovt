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

export const getResumenAtenciones = () => {
  return api.get('/atenciones-usuario')
}

export const getPendientesUsuarios = () => {
  return api.get('/pendientes-usuario')
}

export async function fetchSolucionados(month, year) {
  const response = await api.get(`/solucionados-mes?month=${month}&year=${year}`)
  return response
}

export async function fetchPendientes(month, year) {
  const response = await api.get(`/pendientes-mes?month=${month}&year=${year}`)
  return response
}

export async function getAtencionesMes() {
  const response = await api.get('/atenciones-mes')
  return response.data
}

export async function getPlanillas() {
  const response = await api.get('/total-planillas')
  return response.data
}

export async function getRoe() {
  const response = await api.get('/total-roe')
  return response.data
}

export async function getTrabajadores() {
  const response = await api.get('/total-trabajadores')
  return response.data
}

export async function getTotalOtros() {
  const response = await api.get('/total-otros')
  return response.data
}
