<template>
    <div class="out">
        <img src="../../assets/images/1.jpg" width="100%">
        <router-link to="/selectCity" class="selectCity">所选城市：{{city || '--'}}</router-link>
        <CovInfo :covNotes="covNotes"/>
        <News :news="news"/>
        <Entries/>
        <CovData :covData="covData" :modifyTime="modifyTime"/>
        <ChinaMap/>
        <WorldMap :chinaData="chinaData"/>
        <MySwiper/>
    </div>
</template>

<script>
import CovInfo from "./CovInfo/CovInfo";
import News from "./News/News";
import Entries from "./Entries/Entries";
import CovData from "./CovData/CovData";
import ChinaMap from "./Map/ChinaMap";
import WorldMap from "./Map/WorldMap";
import MySwiper from "./MySwiper/MySwiper";
import api from "../../api";

export default {
    name: "Home",
    components: {
        CovInfo, News, Entries, CovData, ChinaMap, WorldMap, MySwiper
    },
    data() {
        return {
            covNotes: {},
            news: [],
            covData: [],
            modifyTime: null,
            chinaData: {},
            city:''
        }
    },
    created() {
        this.city=localStorage.getItem('city')
        //获取病毒信息
        api.getCovInfo().then((res) => {
            console.log(res.data)
            const data = res.data.newslist[0].desc
            this.covNotes = {
                note1: data.note1,
                note2: data.note2,
                note3: data.note3,
                note4: data.remark1,
                note5: data.remark2,
                note6: data.remark3,
            }
            //获取疫情新闻
            this.news = res.data.newslist[0].news
            //获取全国疫情数据
            this.covData.push({
                name: '现存确诊',
                count: data.currentConfirmedCount,
                incr: data.currentConfirmedIncr
            }, {
                name: '累计确诊',
                count: data.confirmedCount,
                incr: data.confirmedIncr
            }, {
                name: '累计境外输入',
                count: data.suspectedCount,
                incr: data.suspectedIncr
            }, {
                name: '累计治愈',
                count: data.curedCount,
                incr: data.curedIncr
            }, {
                name: '累计死亡',
                count: data.deadCount,
                incr: data.deadIncr
            }, {
                name: '现存无症状',
                count: data.seriousCount,
                incr: data.seriousIncr
            })
            //获取截至时间
            this.modifyTime = data.modifyTime
            //保存全国的累计和现存，传给worldMap
            this.chinaData.confirm = data.confirmedCount
            this.chinaData.curConfirm = data.currentConfirmedCount
        })
    },
    activated() {
        this.city=localStorage.getItem('city')
    }
}
</script>

<style lang="less" scoped>
.out{
    .selectCity{
        position: absolute;
        top:.2rem;
        left: 2.4rem;
        color: white;
        background-color: rgba(0,0,249,.38);
        border: .005rem solid hsla(0,0%,100%,.38);
        border-radius: .12rem;
        padding: .05rem .1rem;
        font-size: .08rem;
    }
}
</style>