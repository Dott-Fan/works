<template>
  <div>
    Home
    <!-- 在vuex中的状态数据，可以通过this.$store.state.count 来获取到直接获取其中的数据 -->
    <strong>{{ count }}</strong>
    <hr>
    <span>{{ userinfo }}</span>
    <button @click="incr">自增一下</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import vuex from "vuex"

export default {

  // 接收到的来自vuex的状态数据，一般在计算属性中使用
  computed:{
    // count(){
    //   return this.$store.state.count
    // } ,
    ...mapState(['count']),
    ...mapGetters(['userinfo'])
    
  },
  mounted(){
    // console.log( vuex )
    console.log( mapState )

  },
  methods:{
    incr(){
      // 通过commit方法调用vuex中mutation 中的incr的方法，改变状态数据
      this.$store.commit( 'incr', 1 )
    }
  }
}
</script>
