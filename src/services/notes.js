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
        note: "Buy some eggs",
        date: "2021-11-10T13:00:00.141Z",
        id: 1,
        important: true,
      },
      {
        note: "Make an omelette",
        date: "2021-11-11T08:00:00.141Z",
        id: 2,
        important: true,
      },
      {
        note: "Wash dishes",
        date: "2021-11-11T09:00:00.000Z",
        id: 3,
        important: true,
      },
      {
        note: "Buy more eggs",
        date: "2021-11-11T13:00:00.000Z",
        id: 4,
        important: true,
      }
    ],
    newNote: ''
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