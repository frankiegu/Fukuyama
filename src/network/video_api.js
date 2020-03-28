import {request} from "./request";

// import {request} from './mock'
// 定义路由

const VIDEODETALL = 'api/video/'
const ANIMELISTBYHOT = 'api/ranking?category=anime&sort=hot'
const ANIMELISTBYTIME = 'api/ranking?category=anime&sort=time'
const HOMELIST = 'api/homerecommend'
const EPISODESLIST = 'api/details/'

export const Cinema = { // 放映厅
    // 视频详情 http://127.0.0.1:8000/api/video/3
    GetVideoDetail(id) {
        return request({
            url: VIDEODETALL + id,
            method: 'get',
        })
    },

    // 动漫列表
    GetAnimeList(sort) {
        // 判断视频列表排序
        let url = sort == 'time' ? ANIMELISTBYTIME : ANIMELISTBYHOT
        return request({
            url: url,
            method: 'get',

        })
    },

    // 首页视频列表 动漫 日剧 电影 通用函数
    GetHomeRecommendList() {
        return request({
            url: HOMELIST,
            method: 'get',

        })
    },

    EpisodesList(id) {
        return request({
            url: EPISODESLIST+id,
            method: 'get',
        })
    }
};