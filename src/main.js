import Vue from 'vue'
import App from './App.vue'
import router from './router'
//css初始化
import './assets/css/base.css'
//移动端适配
import './assets/js/rem'
//引入vant库
import './plugins/vant'
//引入自己包装的echarts插件
import echarts from './plugins/Echarts'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(echarts)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
