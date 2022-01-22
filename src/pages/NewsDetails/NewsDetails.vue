<template>
<div class="out">
    <div class="item" v-for="item in news" :key="item.id">
        <div class="top">
            <span class="source">来源：{{item.infoSource}}</span>
            <span class="time">{{ item.pubDateStr }}</span>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.summary}}</div>
    </div>
</div>
</template>

<script>
import api from "../../api";

export default {
    name: "NewsDetails",
    data(){
        return{
            news:[]
        }
    },
    created() {
        api.getCovInfo().then((res)=>{
            //获取新闻信息
            this.news=res.data.newslist[0].news
        })
    }
}
</script>

<style lang="less" scoped>
    .out{
        background-color: #eee;
        padding: .1rem;
        .item{
            background-color: #fff;
            border-radius: .1rem;
            margin-bottom: .2rem;
            padding: .1rem;
            .top .time{
                float: right;
                color: #999999;
            }
            .title{
                padding-top: .1rem;
                text-align: center;
                width: 80%;
                margin: 0 auto;
                font-size: larger;
            }
            .content{
                padding-top: .1rem;
                line-height: .2rem;
            }
        }
    }
</style>