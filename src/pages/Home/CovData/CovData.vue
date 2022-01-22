<template>
<div class="out">
    <div class="data">
        <div class="title">截至北京时间 {{ modifyTime | forModifyTime}} 全国数据统计</div>
        <ul>
            <li v-for="data in covData" :key="data.name">
                <span>较昨日<span class="incr">{{data.incr | forIncr}}</span></span>
                <strong class="num">{{data.count | forCount}}</strong>
                <strong class="name">{{data.name}}</strong>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import dayjs from "dayjs";

export default {
    name: "CovData",
    props:{
        covData:{
            type:Array,
            default:[]
        },
        modifyTime:{
            type:Number,
            default: null
        }
    },
    //过滤器
    filters:{
        forIncr(val){
            if (val===0){
                return '无变化'
            }else if (val>0){
                return '+'+val
            }else {
                return val
            }
        },
        forCount(val){
            return val.toLocaleString()
        },
        forModifyTime(val){
            return dayjs(val).format('YYYY-MM-DD HH:mm')
        }
    }
}
</script>

<style lang="less" scoped>
.out{
    padding-top: .3rem;
    background-color: #eee;
    .data{
        background-color: white;
        border-radius: .3rem .3rem 0 0;
        padding: .2rem .1rem .1rem .1rem;
        .title{
            padding-bottom: .05rem;
            font-size: .1rem;
            color: #666;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-top: .1rem;
            border-radius: .05rem;
            box-shadow: 0 0 .05rem #eee;
            li{
                width: 33%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-bottom: .1rem;
                span{
                    font-size: .1rem;
                }
                .num{
                    font-size: .2rem;
                }
                &:nth-child(1) .num,.incr{
                    color: rgb(247, 76, 49);
                }
                &:nth-child(2) .num,.incr{
                    color: rgb(174, 33, 44);
                }
                &:nth-child(3) .num,.incr{
                    color: rgb(247, 130, 7);
                }
                &:nth-child(4) .num,.incr{
                    color: rgb(40, 183, 163);
                }
                &:nth-child(5) .num,.incr{
                    color: rgb(93, 112, 146);
                }
                &:nth-child(6) .num,.incr{
                    color: rgb(162, 90, 78);
                }
            }
        }
    }
}
</style>