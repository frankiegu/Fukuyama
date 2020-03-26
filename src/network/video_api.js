import {request} from "./request";

// 定义路由
const VIDEODETALL = 'api/video/'
const ANIMELISTBYHOT = 'api/ranking?category=anime&sort=hot'
const ANIMELISTBYTIME = 'api/ranking?category=anime&sort=time'

export const Cinema = { // 放映厅
    // 视频详情 http://127.0.0.1:8000/api/video/3
    GetVideoDetail(id) {
        return request({
            url: VIDEODETALL + id,
            method: 'get',
        })
    },

// 动漫按热度排序
    GetAnimeListByHot() {
        return request({
            url: ANIMELISTBYHOT,
            method: 'get',

        })
    },




};