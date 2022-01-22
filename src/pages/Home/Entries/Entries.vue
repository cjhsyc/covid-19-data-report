<template>
    <div class="entries">
        <div class="entry" @click="toRiskArea">
            <div class="img">
                <img src="../../../assets/images/1.png">
            </div>
            <p>风险地区</p>
        </div>
        <div class="entry" @click="toTesting">
            <div class="img">
                <img src="../../../assets/images/2.png">
            </div>
            <p>核酸检测</p>
        </div>
        <div class="entry" @click="toMaterials">
            <div class="img">
                <img src="../../../assets/images/3.png">
            </div>
            <p>防疫物资</p>
        </div>
        <div class="entry" @click="toTravel">
            <div class="img">
                <img src="../../../assets/images/4.png">
            </div>
            <p>出行政策</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Entries",
    methods:{
        toTesting(){
            this.$router.push('/testing')
        },
        toMaterials(){
            this.$router.push('/materials')
        },
        toRiskArea(){
            this.$router.push('/riskArea')
        },
        toTravel(){
            this.$router.push('/travel')
        }
    }
}
</script>

<style lang="less" scoped>
.entries {
    padding: .1rem;
    display: flex;
    justify-content: space-between;

    .entry {
        width: 25%;

        .img {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 70%;
            }
        }

        p {
            text-align: center;
        }
    }
}
</style>