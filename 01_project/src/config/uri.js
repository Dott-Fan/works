// 接口请求地址
// 接口域名
const host = 'https://m.maizuo.com'

// 电影列表 pageNum=数字
export const filmListUri = host + "/gateway?cityId=110100&pageSize=30&type=1&k=5155219&pageNum="
// 即将上映
export const comingsoonListUri = host + "/gateway?cityId=110100&pageSize=30&type=2&k=5155219&pageNum="

// 详情信息
export const detailUri = host + 'gateway?k=1244948&filmId='

// 影院信息列表
export const cinemaUri = host + 'gateway?cityId=110100&ticketFlag=1&k=896248'

// 城市列表
export const cityUri = host + 'gateway?k=6175790'