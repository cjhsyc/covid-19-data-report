<template>
    <div class="out">
        <div class="title">{{ city }}疫情地图</div>
        <van-tabs animated :lazy-render="false" color="#3343ff">
            <van-tab :title="'现存确诊'">
                <div ref="main1" style="width: 3.5rem;height: 5rem;"></div>
            </van-tab>
            <van-tab :title="'累计确诊'">
                <div ref="main2" style="width: 3.5rem;height: 5rem;"></div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "CityMap",
    props: ['city'],
    mounted() {
        api.getCityData(this.city).then((res) => {
            console.log(res.data)
            const list = res.data.retdata.subList
            const confirmArr = []
            const curConfirmArr = []
            list.forEach(item => {
                let cityName = item.city
                if (!(['北京', '天津', '上海', '重庆'].includes(this.city))) {
                    cityName = cityName + '市'
                }
                const obj = {}
                obj.name = cityName
                obj.value = item.confirm
                confirmArr.push(obj)
                let now = {}//现存
                now.name = cityName
                now.value = item.curConfirm
                curConfirmArr.push(now)
            })
            this.$nextTick(() => {
                this.$myChart.cityMap(this.$refs.main2, this.city, confirmArr)//显示地图(累计)
                this.$myChart.cityMap(this.$refs.main1, this.city, curConfirmArr)//显示地图（现存）
            })
        })
    }
}
</script>

<style lang="less" scoped>
.out {
    padding: .1rem;

    .title {
        border-left: 4px solid #3343ff;
        padding-left: 0.1rem;
        font-weight: bold;
        font-size: .2rem;
    }
}
</style>