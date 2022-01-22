<template>
    <div class="out">
        <div>
            <img src="../../assets/images/wuzi.png" width="100%">
        </div>
        <div class="wrapper">
            <van-tabs animated :lazy-render="false" color="#3343ff">
                <van-tab v-for="item in imgs" :title="item.title">
                    <img :src="item.img" width="100%">
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import imgKouzhao from '../../assets/images/kouzhao.png'
import imgJiujing from '../../assets/images/jiujing.png'

export default {
    name: "Materials",
    data() {
        return {
            imgs: [
                {
                    title: '口罩',
                    img: imgKouzhao
                },
                {
                    title: '酒精',
                    img:imgJiujing
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.out{
    background-color: #3343ff;
    .wrapper{
        padding: .1rem;
    }
}

</style>