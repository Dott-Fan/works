// 封装axios
// 数据请求层
// 在这里进行请求

import axios from 'axios'

export default class Request{
    /**
     * 
     * @param {string} uri 
     */
    getSwiper(uri = ''){
        if( uri === ''){
            return Promise.reject( new Error('有错了'))
        }
        return axios.get(uri)
    }

    /**
     * 
     * @param {string} uri 
     */
    getMenu(uri = ''){
        if( uri === ''){
            return Promise.reject( new Error('有错了'))
        }
        return axios.get(uri)
    }

    /**
    * 获取请求数据
    * @param {string} uri 
    */
    get(uri = ''){
        if( uri === ''){
            return Promise.reject( new Error('有错了'))
        }
        return axios.get(uri)
    }
    /**
     * 
     * @param {string} uri
     */

    post(uri = '', code ){
        if( uri === ''){
            return Promise.reject( new Error('有错了'))
        }
        let opts = {
            Body: {CommodityCode: code , CommodityId: ""},
            Head: { CityCode: "2",
                    CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    DeviceId: "da6cf7a06f4138fee4369dfe89f96547",
                    DistrictId: "751b5b8e-c1f7-4785-abeb-507b460f01ab",
                  }
              }
        let headers = {
                headers:{appName: 3000025 }
              }
        return axios.post(uri, opts, headers)
    }

}