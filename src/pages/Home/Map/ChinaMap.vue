<template>
<div class="out">
    <div class="title">国内疫情地图</div>
    <van-tabs animated :lazy-render="false" color="#3343ff">
        <van-tab :title="'现存确诊'">
            <div ref="main1" style="width: 3.5rem;height: 3rem;"></div>
        </van-tab>
        <van-tab :title="'累计确诊'">
            <div ref="main2" style="width: 3.5rem;height: 3rem;"></div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
import api from "../../../api";
export default {
    name: "ChinaMap",
    mounted() {
        //获取国内疫情数据
        api.getChinaData().then((res)=>{
            console.log(res.data)
            const retdata=res.data.retdata
            const confirmArr=[]
            const curConfirmArr=[]
            retdata.forEach(item=>{
                let obj={}//累计
                obj.name=item.xArea
                obj.value=item.confirm
                confirmArr.push(obj)
                let now={}//现存
                now.name=item.xArea
                now.value=item.curConfirm
                curConfirmArr.push(now)
            })
            this.$nextTick(()=>{
                this.$myChart.chinaMap(this.$refs.main2,confirmArr)//显示地图(累计)
                this.$myChart.chinaMap(this.$refs.main1,curConfirmArr)//显示地图（现存）
            })
        })
    }
}
</script>

<style lang="less" scoped>
.out{
    padding: .1rem;
    .title{
        border-left: 4px solid #3343ff;
        padding-left: 0.1rem;
        font-weight: bold;
        font-size: .2rem;
    }
}
</style>