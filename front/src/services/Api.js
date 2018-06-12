import axios from 'axios'

export default() => {
  return axios.create({baseURL: process.env.host + ":" + process.env.API_PORT})
}
