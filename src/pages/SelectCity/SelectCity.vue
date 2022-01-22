<template>
<div class="out">
    <div class="title">选择城市</div>
    <van-index-bar :index-list="indexList">
        <template v-for="(item,name) in list">
            <van-index-anchor :index="name" :key="name"/>
            <van-cell :title="ele.name" v-for="ele in item" :key="ele.id" @click="toHome"/>
        </template>
    </van-index-bar>
</div>
</template>

<script>
import api from '../../api'
export default {
    name: "SelectCity",
    data(){
        return{
            list:{},
            indexList:[]
        }
    },
    methods:{
        toHome(event){
            //本地存储
            localStorage.setItem('city',event.target.innerText)
            this.$router.go(-1)//返回
        }
    },
    mounted() {
        api.getCity().then(res=>{
            console.log(res.data)
            const result=res.data.result
            this.list=result.citylist
            this.indexList=Object.keys(this.list)
        })
    }
}
</script>

<style lang="less" scoped>
.out{
    .title{
        line-height: .5rem;
        text-align: center;
        font-size: .25rem;
        background-color: #fff;
    }
    background-color: #f5f5f5;
}
</style>