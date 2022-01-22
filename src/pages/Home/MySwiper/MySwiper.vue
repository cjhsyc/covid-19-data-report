<template>
    <div class="out">
        <div class="title">国内疫情趋势</div>
        <div class="swiper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item,index) in banners" :key="index"><img :src="item.image" width="100%"></swiper-slide>
            </swiper>
        </div>
        <ul>
            <li v-for="(item,index) in banners" :key="index" :class="{active:index === num}"
                @click="changeSwiper(index)">{{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../../../api'
export default {
    name: "MySwiper",
    data() {
        //保存this
        const that=this
        return {
            //swiper配置项
            swiperOptions: {
                speed:1000,
                // loop: true,
                effect:"cards",
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                on:{
                    //窗口切换时触发
                    slideChange: function () {
                        that.num=this.activeIndex
                    }
                }
            },
            navList: [1, 2, 3, 4, 5],
            banners:[],
            num: 0
        }
    },
    computed: {
        //获取swiper实例对象
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    methods: {
        changeSwiper(index) {
            this.num = index
            this.swiper.slideTo(index, 1000, false)//窗口切换
        }
    },
    mounted() {
        api.getSwiperBanner().then(res=>{
            this.banners=res.data.result
        })
    }
}
</script>

<style lang="less" scoped>
.out {
    padding: .3rem .1rem .1rem;
    .title{
        border-left: 4px solid #3343ff;
        padding-left: 0.1rem;
        font-weight: bold;
        font-size: .2rem;
    }
    .swiper {
        padding: .1rem;
        border-radius: .05rem;
        box-shadow: 0 0 .05rem #eee;
        margin-top: .1rem;
        .swiper-navigation {
            --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
            --swiper-navigation-size: 30px; /* 设置按钮大小 */
        }
    }

    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: .2rem;

        li {
            width: 15%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .045rem;
            color: #666;
            text-align: center;
            background: #f7f7f7;
            border-radius: .02rem;
            font-size: .12rem;
        }

        .active {
            color: #4169e2;
            background: #f1f5ff;
        }
    }
}
</style>