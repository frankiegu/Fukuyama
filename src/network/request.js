import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        // baseURL: 'http:///api.bwijn.xyz',
        baseURL: 'http://127.0.0.1:8000/',
        method: 'post',
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        withCredentials: true,
        // timeout: 5000,
    })
    instance.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem("token");
    // console.log(instance.defaults.headers.common['Authorization']);
    // console.log(localStorage.getItem('token'));
    return instance(config)
}