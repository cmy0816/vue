<template>
<div class="bus-banner">
    <img src="https://www.datafountain.cn/_df_static/img/logo-white.4dd9e13.png" class='logo'>
    <h3>为BD&AI产业赋能</h3>
    <p>DF（DataFountain.cn）是国内最具品牌影响力及权威性的数据竞赛平台及大数据社区。
        致力于吸引国内外顶尖数据科学家、领域研究学者、数据工作爱好者，为政府、企业、科研机构、
        高校及行业学会等机构提供解决科学发现、人工智能、商业智能、情报挖掘、大数据分析和大数据管理
        等方面问题的众包平台，提供一体化大数据类赛事规划、推广、运营、潜力挖掘全流程服务。</p>
</div>
</template>
<script>
export default {
    deta () {
        return {
            text:'为BD&AI产业赋能'
        }
    },
    mounted() {
        
    },
    methods:{

    }
}
</script>
<style scoped>
.bus-banner{
    background: url('https://www.datafountain.cn/_df_static/img/Background.2ff2d04.jpg') no-repeat;
    background-size:cover;
    width:100%;
    padding:100px;
}
.logo{
    display:block;
}
h3{
    margin: 8px 0 48px;
    font-size: 48px;
    font-weight: 500;
    color: #dee2e6;
}
p{
    line-height: 2;
    margin-top:30px;
    color: #dee2e6;
    font-size:14px;
}
</style>
