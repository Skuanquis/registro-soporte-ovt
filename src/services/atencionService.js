import api from './api'

export const createAtencion = (atencionData) => {
  return api.post('/atenciones', atencionData)
}

export const getUserAtenciones = () => {
  const userId = localStorage.getItem('userId')
  return api.get(`/atenciones/${userId}`)
}

export const updateAtencion = (id, atencionData) => {
  return api.put(`/atenciones/${id}`, atencionData)
}
