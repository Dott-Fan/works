import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导入请求数据的方法
import request from '../api/request'
import cart from './modules/cart'
import todolist from './modules/todolist'

export default new Vuex.Store({
  modules:{
    cart,
    todolist
  },
  //在vuex中，state是数据源仓库，所有组件的状态数据都存储在state中
  state: {
    count:100,
    name:'张三',
    age:20,
    films:[],
  },
  getters:{
    userinfo(state){
      return state.name + '年龄' + state.age
    }

  },
  mutations: {
    incr( state, value){
      state.count += value
      state.age++
    },
    films(state, data ){
      console.log(data)
      state.films = data
    }
  },
  actions: {
    // 调用films的函数，并请求数据
    async films( {commit}, page){

      let ret = await request.getData( )
      console.log(ret)
      console.log(request)
      
      // 拿到数据，数据交给mutation，然后操作state
      // console.log( ret.data.data.films)
      commit('films', ret.data.data.films )
    },
  }
})
