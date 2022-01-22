<template>
    <div class="out">
        <div class="field">
            <van-field
                    v-model="location"
                    is-link
                    readonly
                    label="出发城市"
                    placeholder="请选择所在地"
                    @click="show1 = true"
            />
            <van-popup v-model="show1" round position="bottom" :style="{ height: '50%' }">
                <van-cascader
                        title="请选择所在地"
                        active-color="#1989fa"
                        :options="options"
                        @close="show1 = false"
                        @finish="onFinish1"
                />
            </van-popup>
            <van-field
                    v-model="destination"
                    is-link
                    readonly
                    label="目标城市"
                    placeholder="请选择目的地"
                    @click="show2 = true"
            />
            <van-popup v-model="show2" round position="bottom" :style="{ height: '50%' }">
                <van-cascader
                        title="请选择所在地"
                        active-color="#1989fa"
                        :options="options"
                        @close="show2 = false"
                        @finish="onFinish2"
                />
            </van-popup>
            <div class="button">
                <van-button color="#007aff" size="large" @click="search">政策查询</van-button>
            </div>
        </div>
        <div class="content" v-show="show">
            <div class="title" :class="{high:fromInfo.risk_level !== '1'}">
                出{{ fromInfo.city_name }}
                <span>{{fromInfo.risk_level === '1' ? '低风险':'有风险'}}</span>
            </div>
            <div class="desc">{{ fromInfo.out_desc }}</div>
            <div class="title" :class="{high:toInfo.risk_level !== '1'}">
                进{{ toInfo.city_name }}
                <span>{{toInfo.risk_level === '1' ? '低风险':'有风险'}}</span>
            </div>
            <div class="desc">{{ toInfo.low_in_desc }}</div>
        </div>
    </div>
</template>

<script>
import '../../plugins/vant'
import cities from '../../util/cities'
import api from "../../api";

export default {
    name: "Travel",
    data() {
        return {
            show1: false,
            show2: false,
            location: '',//所在地
            destination: '',//目的地
            from: null,
            to: null,
            fromInfo: '',
            toInfo: '',
            show: false
        };
    },
    computed: {
        // 选项列表，children 代表子选项，支持多级嵌套
        options() {
            const arr = []
            cities.forEach(item => {
                const obj = {}
                obj.text = item.province
                obj.value = item.province_id
                obj.children = []
                item.cities.forEach(ele => {
                    const child = {}
                    child.text = ele.city
                    child.value = ele.city_id
                    obj.children.push(child)
                })
                arr.push(obj)
            })
            return arr
        }
    },
    methods: {
        // 全部选项选择完毕后，会触发 finish 事件
        onFinish1({value, selectedOptions}) {
            this.from = value
            this.show1 = false;
            this.location = selectedOptions.map((option) => option.text).join('/');
        },
        onFinish2({value, selectedOptions}) {
            this.to = value
            this.show2 = false;
            this.destination = selectedOptions.map((option) => option.text).join('/');
        },
        search() {
            if (!this.from || !this.to) {
                alert('未选择城市！')
                return
            }
            if (this.from === this.to) {
                alert('出发地和目的地不能一致！')
                return;
            }
            api.getTravel(this.from, this.to).then(res => {
                console.log(res.data)
                this.fromInfo = res.data.result.from_info
                this.toInfo = res.data.result.to_info
            })
            this.show = true
        }
    },
}
</script>

<style lang="less" scoped>
.out {
    background: url(../../assets/images/travel.png) no-repeat;
    background-size: contain;
    padding: .1rem;

    .field {
        padding-top: 1.4rem;

        .button {
            padding-top: .1rem;
        }
    }

    .content {
        .title {
            margin: .2rem 0;
            padding: .08rem .05rem .08rem .22rem;
            background-color: #40cca7;
            border-radius: .06rem;
            color: white;
            font-weight: 700;
            font-size: .18rem;
            line-height: 1.41;
            span{
                font-size: .12rem;
                font-weight: normal;
            }
        }
        .high{
            background-color: #fbb046;
        }
    }

    .desc {
        padding: .12rem;
        background-color: #f7f7f7;
        border-radius: .06rem;
        line-height: .2rem;
    }
}

</style>