import axios from 'axios'
import qs from 'qs'
export async function getBooksList(url, data) {
    var res = await axios.post(url, qs.stringify(data))
    return res.data.resultObj;
}

//获取行业资讯
// getBooksList('/api/articles/getContentByParentChannelId', {
//     channelId: 'CHANNELI_1810111034260000',
//     currentPage: 1,
//     pageSize: 4
// });

//获取重点阅读
// getBooksList('/api/articles/mobile', {
//     channelId: 'CHANNELI_1810111407350005',
//     currentPage: 1,
//     pageSize: 12
// });

//获取轮播图
// getBooksList('/api/indexs/getWebData', {
//     channelId: 'ChannelId_IndexLunBo',
//     currentPage: 1,
//     pageSize: 12
// });

//获取封面
// getBooksList('/api/indexs/getWebData', {
//     channelId: 'ChannelId_IndexFengMian',
//     currentPage: 1,
//     pageSize: 12
// });



//调用
// import { getBooksList, getBook } from './services/bookServices.js'

// async function handleBooksList() {
//     var res = await getBooksList('/api/articles/getContentByParentChannelId', {
//         channelId: 'CHANNELI_1810111034260000',
//         currentPage: 1,
//         pageSize: 4
//     })
//     console.log(res);
// }
// handleBooksList();



//获取具体书本信息
export async function getBook(channelId, id) {
    var res = await axios.post('/api/articles/mobile', qs.stringify({
        channelId,
        id,
        currentPage: 1,
        pageSize: 12
    }))
    return res.data.resultObj[0];
}

// async function handleBook() {
//     var res = await getBook('CHANNELI_1810121125220000', 'article2001141556560000');
//     console.log(res);
// }
// handleBook();