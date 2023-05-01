import axios  from 'axios'
const baseURL = 'http://localhost:8888/api'
const instance = axios.create({
    baseURL,
    timeout: 5000,
})

export default instance