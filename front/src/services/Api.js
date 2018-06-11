import axios from 'axios'

export default() => {
  return axios.create({baseURL: process.env.ROOT_URL + ":" + process.env.API_PORT})
}
