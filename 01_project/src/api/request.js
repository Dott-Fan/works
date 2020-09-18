

// 作用是定义好请求的方法
// 引入封装的axios
import Http from './http'

import { filmListUri } from  '../config/uri'

class  Request extends Http{

    // 获取列表数据
    //因为是方法，调用到的结果一定记得返回，不定义的还，函数没有返回值
    getData(page =1){
        return this.httpGet( filmListUri + page ,{
            'X-Host': 'mall.film-ticket.film.list'
        })
    }

    getCartData( url ){
        return this.cartGet( url )
    }
}

export default new Request()

