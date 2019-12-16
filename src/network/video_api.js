import {request} from "./request";

// 定义路由
const VIDEODETALL = '/video/'

export const HomePage = {
    // 首页热门推荐
    Ranking() {
        return request({
            url: RANKING,
            method: 'get',

        })
    }
};