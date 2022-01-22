//请求接口管理

const base={
    host:'http://api.tianapi.com',//天行数据
    covInfo:'/ncov/index?key=54157baf7261e2127a8bfa3c10466d91',//天行数据--疫情信息
    baseUrl:'https://yupn.api.storeapi.net',//挖数据
    chinaData:'/api/94/219?format=json&appid=13624&sign=253e97c49d82d116965f4277a2695a78',//挖数据--国内疫情数据
    worldData:'/api/94/220?format=json&appid=13624&sign=253e97c49d82d116965f4277a2695a78',//挖数据--世界疫情数据
    cityData:'/api/94/221',//挖数据--省份疫情数据
    swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
    travel:'/api/springTravel/query?key=a430edfa89e29bca780c9ce47018c915',//聚合数据--出行防疫政策
    getCity:'/foo/aj/getcitycode',//360接口--城市列表
}

export default base