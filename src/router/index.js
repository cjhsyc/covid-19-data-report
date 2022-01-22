import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home";

//异步
const Materials = () => import('../pages/Materials/Materials')
const RiskArea = () => import('../pages/RiskArea/RiskArea')
const NewsDetails = () => import('../pages/NewsDetails/NewsDetails')
const Testing = () => import('../pages/Testing/Testing')
const CityMap = () => import('../pages/CityMap/CityMap')
const Travel = () => import('../pages/Travel/Travel')
const SelectCity = () => import('../pages/SelectCity/SelectCity')

Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior(to, from, savePosition) {
        if (savePosition) return savePosition
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/testing',
            component: Testing
        },
        {
            path: '/materials',
            component: Materials
        },
        {
            path: '/riskArea',
            component: RiskArea
        },
        {
            path: '/newsDetails',
            component: NewsDetails
        },
        {
            path: '/cityMap/:city',
            component: CityMap,
            props: true
        },
        {
            path: '/travel',
            component: Travel
        },
        {
            path: '/selectCity',
            component: SelectCity
        }
    ]
})