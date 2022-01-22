<template>
    <div class="riskArea">
        <div class="areas">
            <div class="content">
                <div class="high" v-if="high.length">
                    <div class="top">
                        <div class="title">
                            <img src="../../assets/images/high.png">
                            <p>高风险地区{{high.length}}个</p>
                        </div>
                        <span>截至北京时间{{ modifyTime | forModifyTime }}</span>
                    </div>
                    <div class="address">
                        <div class="area" v-for="(area,index) in high" :key="index">
                            {{area}}
                        </div>
                    </div>
                </div>
                <div class="mid" v-if="mid.length">
                    <div class="top">
                        <div class="title">
                            <img src="../../assets/images/mid.png">
                            <p>中风险地区{{ mid.length }}个</p>
                        </div>
                        <span>截至北京时间{{ modifyTime | forModifyTime}}</span>
                    </div>
                    <div class="address">
                        <div class="area" v-for="(area,index) in mid" :key="index">
                            {{area}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../api'
import dayjs from "dayjs";

export default {
    name: "RiskArea",
    data() {
        return {
            high: [],
            mid: [],
            modifyTime: null
        }
    },
    created() {
        api.getCovInfo().then((res) => {
            //获取风险地区
            const areas = res.data.newslist[0].riskarea
            this.high = areas.high
            this.mid = areas.mid
            //获取截至时间
            this.modifyTime = res.data.newslist[0].desc.modifyTime
        })
    },
    filters: {
        forModifyTime(val) {
            return dayjs(val).format('YYYY-MM-DD HH:mm')
        }
    }
}
</script>

<style lang="less" scoped>
.riskArea {
    background-color: #f7f7f7;
    background-image: url("../../assets/images/area.png");
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 3rem;

    .areas {
        padding: 1.1rem .1rem .1rem;

        .content {
            padding: .15rem;
            background-color: #fff;
            border-radius: .05rem;

            .high {
                padding-bottom: .1rem;
            }

            .top {
                display: flex;
                justify-content: space-between;
                padding-bottom: .1rem;

                .title {
                    display: flex;

                    img {
                        width: .2rem;
                        margin-right: .05rem;
                    }
                }

                span {
                    color: #999;
                    font-size: .1rem;
                }
            }
            .address{
                border-radius: .1rem;
                padding: .1rem;
                .area{
                    padding-bottom: .1rem;
                }
            }
            .high .address{
                background-color: rgba(255,91,77,.1);
            }
            .mid .address{
                background-color: rgba(255,170,0,.1);
            }
        }
    }
}
</style>