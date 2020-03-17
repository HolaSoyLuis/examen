import axios from 'axios'

const toApi = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem()
    }
})