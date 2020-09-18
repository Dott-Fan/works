<template>
<div>
    <!-- 使用vuex来获取电影列表 -->
    <ul>
        <li v-for='item in films' :key='item.filmId'>
            {{ item.name }}
        </li>
    </ul>

</div>
</template>

<script>
// 引入vuex中的数据
import { mapState } from 'vuex'
export default {
    data(){
        return{
            page:1
        }
    },
    computed:{
        ...mapState(['films'])
    },
    mounted () {
        // 发送一个指令给vuex
        // 参数1，名称自定义
        // 参数2，传递的参数
        this.$store.dispatch('films', this.page )
    },
    methods:{

    }
}
</script>

<style lang='scss' scoped>

</style>
