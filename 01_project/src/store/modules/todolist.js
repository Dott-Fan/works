// 模块化的todolist

export default {
    namespaced:true,
    state:{
        willDo:[],
        Done:[],
        num1:0,
        num2:0
    },
    getters:{
        doingCount(state){
            state.num1 = state.willDo.length
            return state.num1
        },
        endCount(state){
            state.num2 = state.Done.length
            return state.num2
        }
    },
    mutations:{
        add(state, msg){
            state.willDo.push(msg)
        },
        done(state, word,index ){
            state.willDo.splice(index, 1)
            state.Done.push( word )  
        },
        reback(state, word, index){
            state.willDo.push(word)
            state.Done.splice(index,1)
        },
        cut(state,index){
            state.willDo.splice(index, 1)
        },
        del(state,index){
            state.Done.splice(index, 1)
        },

    },
    actions:{
        add({commit}, msg){
            commit('add', msg)
        },
        done({commit}, word, index){
            commit('done', word, index)
        },
        reback({commit}, word, index){
            commit('reback',word, index)
        },
        cut({commit}, index){
            commit('cut', index)
        },
        del({commit}, index){
            commit('del', index)
        }
    },
}