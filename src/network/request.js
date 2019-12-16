import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        // todo 上线的时候改成服务器地址
        baseURL: 'http://localhost:8000',
        method: 'post',
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        withCredentials: true,
        // timeout: 5000,
    })
    instance.defaults.headers.common['Authorization'] = localStorage.key("token");

    return instance(config)
}