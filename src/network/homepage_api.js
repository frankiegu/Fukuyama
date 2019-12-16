import {request} from "./request";

// 定义路由
const RANKING = '/api/homerecommend/'

export const HomePage = {
    // 首页热门推荐
    Ranking() {
        return request({
            url: RANKING,
            method: 'get',

        })
    }
};