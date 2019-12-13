import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        // todo 上线的时候改成服务器地址
        baseURL: 'http://localhost:8000',
        method: 'post',
        transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],

        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        withCredentials: true,
        // timeout: 5000,
    })
    return instance(config)
}