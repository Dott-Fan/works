// 定义好请求的方法，利用class类来定义

import axios from 'axios'

export default class Http{
    // 需要请求头信息
    // 构造信息
    constructor(){
        this.headers = {
            "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
            "X-Host": "mall.film-ticket.film.list"
        }
    }

    httpGet( url, headers={}){
        headers = { ...this.headers, ...headers}
        return axios.get(url, {
            headers
        })
        
    }

    cartGet(url){
        return axios.get(url)
    }
}