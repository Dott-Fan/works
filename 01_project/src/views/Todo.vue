<template>
<div>
    <!-- todolist -->
    <section id="root">
        <section id="topArea">
            <header>
                <h1 id="logo">ToDoList</h1>
                <!-- input框是一个组件 -->
                <input type="text" placeholder="添加todolist" v-model='msg' @keyup.enter='add' >
            </header>
        </section>
        <section id="main">
            <section class="main-con">
                <!-- 正在进行是一个组件 -->
                <div class ='doing'>
                    <h2>
                        正在进行
                        <span id='doing_num'>{{ doingCount }}</span>
                    </h2>
                    <ol>
                        <li v-for='(item,index) in willDo' :key = 'index'>
                            <p>{{ item }}</p>
                            <button @click='done( item, index )' >完成</button>
                            <button @click='cut(index)'>删除</button>
                        </li>
                    </ol>
                </div>
                <!-- 已经完成时一个组件 -->
                <div class='finished'>
                    <h2>
                        已经完成
                        <span id='end_num'>{{ endCount }}</span>
                    </h2>
                    <ul>
                        <li v-for='(item, index) in Done' :key='index'>
                            <p>{{ item }}</p>
                            <button @click='reback(item, index)' >返回</button>
                            <button @click='del(index)'>删除</button>
                        </li>
                    </ul>
                    
                </div>
            </section>
        </section>
    </section>

</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data () {
        return {
            msg:''
        }
    },
    computed:{
        ...mapState('todolist',['willDo','Done']),
        ...mapGetters('todolist',['doingCount','endCount'])
    },
    methods:{
        add(){
           this.$store.dispatch('todolist/add', this.msg ) 
           this.msg=''
        },
        done(word,index){
            this.$store.dispatch('todolist/done', word,index ) 
        },
        reback(word,index){
            this.$store.dispatch('todolist/reback',word,index)
        },
        cut(index){
            this.$store.dispatch('todolist/cut',index)
        },
        del(index){
            this.$store.dispatch('todolist/del',index)
        }
    }
}
</script>

<style lang='scss' scoped>
h1,input,ol,ul,li,p{
        margin: 0;
        padding: 0;
    }
    ol,ul,li{
        list-style-type: none;  
    }
    #root{
        background: #cdcdcd;
    }
    #topArea{
        background: #000;
    }
    header,.main-con{
        margin: 0 auto;
        width: 600px;
    }
    header{
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        color: #ffffff;
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
    header input{
        height: 30px;
        width:360px;
        line-height: 40px;
        outline: none;
        border-radius: 8px;
        padding-left: 10px;
    }
    li{
        background:skyblue; 
        position: relative;
        margin-top:4px;
    }
    li p{
        height: 30px;
        line-height: 30px;
        background: #fff;
        margin-left: 4px;
        padding-left: 8px;
        padding-right: 90px;
        /* float: left; */
    }
    .doing ol li button:nth-of-type(1){
        position: absolute;
        right:50px;
        top: 5px;
    }
    .doing ol li button:nth-of-type(2){
        position: absolute;
        right:0px;
        top: 5px;
    }
    .finished ul li button:nth-of-type(1){
        position: absolute;
        right:50px;
        top: 5px;
    }
    .finished ul li button:nth-of-type(2){
        position: absolute;
        right:0px;
        top: 5px;
    }
    .doing>h2,.finished>h2{
        position: relative;
    }
    #doing_num,#end_num{
        position: absolute;
        width: 20px ;
        height: 20px;
        border-radius: 8px;
        background: #fff;
        right: 0px;
        top: 6px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }

</style>
