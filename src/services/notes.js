import axios from 'axios'
const baseUrl = 'http://localhost:3001/reminders'

const getAll2 = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(baseUrl)
  const item = {
    reminders: [
      {
        name: 'Buy some eggs',
        timestamp: "2018-11-10T13:00:00.141Z"
      }
    ],
    newName: ''
  }
  return request.then(response => response.data.concat(item))
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, create, update
}