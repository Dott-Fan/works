// 引入请求数据的方法
import request from '../../api/request'

export default{
    namespaced:true,
    state:{
        cartList:[]
    },
    getters:{
        oneSum(state){
            // 利用map方法，计算小计
            return state.cartList.map( item =>{
              item['total'] = item.num * item.price
              return item
            })
          },
        cartTotalPrice(state){
            // 可以采用两种方法
            // 第一种直接使用循环得到
            let total = 0 
            state.cartList.forEach(item=>{ total += item.num*item.price })
            return total
            
        }

    },
    mutations:{
        cartData(state, data ){
            state.cartList = data
        },
        incr1(state,index){
            state.cartList[index].num++
        },
        desc(state,index){
            state.cartList[index].num--
        }
    },
    actions:{
        async cartData({ commit }, data ){
            let ret = await request.getCartData("http://10.9.70.248:8080/data/cart.json")
            commit( "cartData" , ret.data )
        },
        incr1({commit},index){
            commit('incr1',index)
        },
        desc({commit}, index ){
            commit('desc', index )
        }
    }

}