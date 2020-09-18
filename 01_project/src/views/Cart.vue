<template>
<div>
    <ul>
        <li v-for= '(item, index) in oneSum' :key='item.id'>
            <span>{{ item.id }}</span>
            <span>{{ item.name }}</span>
            <span>{{ item.price }}</span>
            <button @click='desc(index,item.num )'>---</button>
            <input type="text" v-model="item.num">
            <button @click='incr1(index)'>+++</button>
            <span>小计{{ item.total }}</span>
        </li>
    </ul>
    <span>总计{{ cartTotalPrice }}</span>

</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data () {
        return {
            title:'北京'
        }
    },
    computed:{
        // ...mapState(['cartList']),
        ...mapGetters('cart',['oneSum','cartTotalPrice'])
    },
    mounted () {
        // 发送指令给vuex,调用vuex的actions中的cartData方法
        // 参数1，自定义名称
        // 参数2，传递参数
        this.$store.dispatch('cart/cartData')
    },
    methods:{
        incr1(index){
            this.$store.dispatch('cart/incr1',index)
        },
        desc(index,num){
            if( num > 1 ){
                this.$store.dispatch('cart/desc', index )
            }
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    li{
        list-style: none;
        display: flex;
        span{
            display: flex;
            width: 80px;
        };
    }
}

</style>
