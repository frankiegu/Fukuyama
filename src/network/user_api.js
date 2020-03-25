import {request} from "./request";
import form from "view-design/src/mixins/form";

// 定义路由
const TOKEN = '/api-token-auth';
const USER = '/api/user/';
const USER_AVATAR = '/api/upload';

export const User = {
    // 登录获取token请求
    // params 传入请求参数
    login(params) {
        console.log("Network User login -- ", params);


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
    },

    upload_avatar(file) {
        // console.log(file);
        // var forms = new FormData()
        // forms.append('file',file)
        // console.log(forms.get('file'));
        return request({
            url: USER_AVATAR,
            method: 'post',
            data: file,
            headers: {
                // 'Content-Type': 'multipart/form-data',
            },
        })
    }

};