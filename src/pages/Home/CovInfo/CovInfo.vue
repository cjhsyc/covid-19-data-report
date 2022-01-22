<template>
    <div class="info">
        <div class="title">病毒信息</div>
        <div class="content">
            <p>{{ covNotes.note1 }}</p>
            <p>{{ covNotes.note2 }}</p>
            <p>{{ covNotes.note3 }}</p>
            <p>{{ covNotes.note4 }}</p>
            <p>{{ covNotes.note5 }}</p>
            <p>{{ covNotes.note6 }}</p>
        </div>
    </div>
</template>
新闻详情
<script>
export default {
    name: "CovInfo",
    props: {
        covNotes: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="less" scoped>
.info {
    padding: 0.1rem;

    .title {
        border-left: 4px solid #3343ff;
        padding-left: 0.1rem;
        font-weight: bold;
        font-size: .2rem;
    }

    .content {
        padding-left: .1rem;
        p {
            line-height: 0.2rem;
            padding-top: 0.1rem;
            color: #666;
        }
    }
}
</style>