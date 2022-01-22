//请求接口的方法
import axios from "axios";
import base from './base'

//导入MD5
import md5 from "md5-js";

const api = {
    //疫情信息获取
    getCovInfo() {
        return axios.get(base.host + base.covInfo)
    },
    //获取国内疫情数据
    getChinaData() {
        return axios.get(base.baseUrl + base.chinaData)
    },
    //获取世界疫情数据
    getWorldData() {
        return axios.get(base.baseUrl + base.worldData)
    },
    //获取城市疫情数据
    getCityData(city) {
        //安装md5-js
        const rule = md5('appid13624city_name' + city + 'formatjsonde31d53929098dba8d7014f0514e8ec2')
        const str = '?format=json&appid=13624&city_name=' + city + '&sign=' + rule
        return axios.get(base.baseUrl + base.cityData + str)
    },
    //轮播图
    getSwiperBanner() {
        return axios.get(base.swiperBanner)
    },
    //出行政策
    getTravel(from,to){
        return axios.get(base.travel,{
            params:{
                from,
                to
            }
        })
    },
    //城市列表
    getCity(){
        return axios.get(base.getCity)
    }
}

export default api