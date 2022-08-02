import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 8000
})

server.interceptors.request.use(config => {
    return config
})

server.interceptors.response.use(response => {
    return response.data
}, err => {
    console.log(err)
})

export default server