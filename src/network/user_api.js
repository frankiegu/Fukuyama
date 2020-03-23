import {request} from "./request";

// 定义路由
const TOKEN = '/api-token-auth';
const USER = '/api/user/';

export const User = {
    // 登录获取token请求
    // params 传入请求参数
    login(params) {
        console.log("Network User login -- ",params);


        return request({
            url: TOKEN,
            method: 'post',
            data: params
        })

    }
    ,
    register(params) {
        return request({
            url: USER,
            method: 'post',
            data: params,
        })
    }
};