<template>
    <div class="news">
        <div class="title"><p>疫情热点</p><router-link to="/newsDetails">查看更多 &gt;</router-link></div>
        <div class="content" @click="toNewsDetails">
            <ul>
                <li v-for="item in news" :key="item.id">
                    <div class="newsTitle">
                        <span>最新</span>{{ item.title }}
                    </div>
                    <div class="gt"><p>&gt;</p></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "News",
    props: {
        news: {
            type: Array,
            default: []
        }
    },
    methods:{
        toNewsDetails(){
            this.$router.push('/newsDetails')
        }
    }
}
</script>

<style lang="less" scoped>
.news {
    padding: 0.1rem;

    .title {
        border-left: 4px solid #3343ff;
        padding-left: 0.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-weight: bold;
            font-size: .2rem;
        }
        a{
            color: #4169e2;
        }
    }

    .content {
        padding-left: .1rem;
        ul {
            padding-bottom: .2rem;
            border-bottom: 1px solid #eee;
            li {
                padding-top: .1rem;
                font-size: .16rem;
                display: flex;
                justify-content: space-between;
                .newsTitle{
                    width: 90%;
                    span {
                        background-color: #f74c31;
                        color: white;
                        border-radius: .02rem;
                        margin-right: .04rem;
                        font-size: .1rem;
                        padding: .01rem;
                    }
                }
                .gt{
                    width: .3rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: #999;
                    }
                }
            }
        }
    }
}
</style>