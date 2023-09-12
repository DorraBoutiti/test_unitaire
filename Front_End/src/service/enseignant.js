import Axios from "axios"
export const createEnseignant = async (EnseignantData) => {
  const result = await Axios.post("http://localhost:5000/users/create", EnseignantData)
  return result.data
}
export const updateEnseignant = async (EnseignantData, id) => {
  const result = await Axios.put("http://localhost:5000/users/updatebyid/"+id, EnseignantData)
  return result.data
}

export const deleteEnseignant = async (id) => {
  const result = await Axios.delete("http://localhost:5000/users/deletebyid/"+id)
  return result.data
}
export const getEnseignantbyid = async (id) => {
  const result = await Axios.get("http://localhost:5000/users/getbyid/"+id)
  return result.data
}
export const getAllEnseignant = async () => {
  const result = await Axios.get("http://localhost:5000/users/getAll")
  return result.data
}
