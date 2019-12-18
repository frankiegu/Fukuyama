import {request} from "./request";

// 定义路由
const VIDEODETALL = 'api/video/'

export const Cinema = { // 放映厅
    // 视频详情 http://127.0.0.1:8000/api/video/3
    GetVideoDetail(id) {
        return request({
            url: VIDEODETALL + id,
            method: 'get',
        })
    },
    // Detail(id) {
    //     return request({
    //         url: VIDEODETALL + id,
    //         method: 'get',
    //
    //     })
    // }

};