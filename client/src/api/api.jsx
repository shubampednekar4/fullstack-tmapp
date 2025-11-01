import axios from 'axios';
export const api = axios.create({
    baseURL : '/api',
    headers : {
        'Content-Type' : 'application/json'
    }
})

api.interceptors.request.use(config => {
    if(localStorage.getItem('token')){
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config;
})

api.interceptors.response.use(
    res=>res,
    err => {
        console.log('api errpr',err)
        if(err.response.status === 401){
            window.location.href = '/home'
        }
        return Promise.reject(err)
    }
)