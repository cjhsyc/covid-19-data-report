//把echarts开发成Vue的插件
import echarts from 'echarts'
//导入地图
import '../util/map'
//导入国家名称映射（英文翻译中文）
import country from '../util/country'

const install=function (Vue,options){
    Object.defineProperties(Vue.prototype,{
        $myChart:{
            get(){
                return{
                    chinaMap(dom, data) {
                        const myChart = echarts.init(dom);
                        const option = {
                            tooltip: { //悬浮弹框
                                triggerOn: 'click', //提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d
                                    return '<a href="#/cityMap/' + item.name + '" style="color:#fff">' + item.name + '： '+ item.value.toLocaleString() +' | 点击详情&gt;</a>'
                                }
                            },
                            visualMap: [{ //映射高亮颜色
                                orient: "horizontal", //水平的
                                type: "piecewise", //离散
                                bottom: 0,
                                textGap: 4,
                                itemGap: 4,
                                itemWidth: 9,
                                itemHeight: 9,
                                padding: 2,
                                textStyle: {
                                    fontSize: 9,
                                },
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 49,
                                        color: "#FAEBD2"
                                    },
                                    {
                                        min: 50,
                                        max: 199,
                                        color: "#E9A188"
                                    },
                                    {
                                        min: 200,
                                        max: 999,
                                        color: "#D56355"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#BB3937"
                                    },
                                    {
                                        min: 5000,
                                        color: "#772526"
                                    }
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: "map", //地图  bar  line  map
                                map: "china", //中国地图 需要引入地图china.js
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                                /*data: [
                                    { name: '内蒙古', value: 200 },
                                    { name: '北京', value: 800 },
                                ]*/
                            }]
                        };
                        myChart.setOption(option);
                        //延迟resize
                        setTimeout(function (){
                            myChart.resize()
                        },200)
                        //随屏幕大小改变
                        window.addEventListener('resize',function(){
                            myChart.resize()
                        })
                    },
                    worldMap(dom, data) {
                        const myChart = echarts.init(dom);
                        const option = {
                            tooltip: { //悬浮弹框
                                triggerOn: 'click', //提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d
                                    return item.name + '： ' + item.value.toLocaleString()
                                }
                            },
                            visualMap: [{ //映射高亮颜色
                                orient: "vertical", //垂直
                                type: "piecewise", //离散
                                bottom: 0,
                                itemGap: 4,
                                itemWidth: 9,
                                itemHeight: 9,
                                textStyle: {
                                    fontSize: 9,
                                },
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 10000,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 10000,
                                        max: 100000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 100000,
                                        max: 500000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 500000,
                                        // max: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "国",
                                type: "map", //地图  bar  line  map
                                map: "world",
                                nameMap: country,//自定义地区的名称映射
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        };
                        myChart.setOption(option);
                        //延迟resize
                        setTimeout(function (){
                            myChart.resize()
                        },200)
                        //随屏幕大小改变
                        window.addEventListener('resize',function(){
                            myChart.resize()
                        })
                    },
                    cityMap(dom,cityname,data){
                        const myChart = echarts.init(dom);
                        const option = {
                            tooltip: {//悬浮弹框
                                triggerOn: 'click',//提示框触发的条件
                                enterable: true,
                                formatter(data) {//[{} ] data={}
                                    return data.name+'： '+ data.value
                                }
                            },
                            visualMap: [{//映射高亮颜色
                                orient: "vertical",//垂直
                                type: "piecewise",//离散
                                bottom: 0,
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 10,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 10,
                                        max: 100,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 100,
                                        max: 500,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 500,
                                        max: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "市",
                                type: "map",//地图
                                map: cityname,//中国地图
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        };
                        myChart.setOption(option);
                        //延迟resize
                        setTimeout(function (){
                            myChart.resize()
                        },200)
                        //随屏幕大小改变
                        window.addEventListener('resize',function(){
                            myChart.resize()
                        })
                    },

                }
            }
        }
    })
}

export default install