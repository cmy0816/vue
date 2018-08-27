<template>
    <div class="service">
        <div class="item" :style='{background:"#2b333f url("+item.src+") no-repeat"}' v-for='(item,index) in data' :key='index'>
            <h4>{{item.tit}}</h4>
            <p>{{item.detail}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data:[{
                src:'https://www.datafountain.cn/_df_static/img/business-story-1.67b0aa9.jpg',
                tit:'权威指导',
                detail:'权威数据专家帮助客户需根据核心需求、自有资源、技术能力、数据保密性、后续商业化等方面确定赛题方向及评估大赛效果。'
            },{
                src:'https://www.datafountain.cn/_df_static/img/business-story-2.052877d.jpg',
                tit:'精准运营推广',
                detail:'依托DF平台多年构筑的校园媒体、社团、大使网络，及专家老师等高校资源及强势校园影响力，在全国985、211院校，及部分计算机优势高校，选取多所院校定向展开多样化组合推广，执行DF平台特有的一体化高校全覆盖。'
            },{
                src:'https://www.datafountain.cn/_df_static/img/business-story-3.c0b7e35.jpg',
                tit:'高端活动筹办',
                detail:'承办政府、机构、高校、学会协会、企业、会议组织等基于需求联合策划主办各类型赛事、会议活动+竞赛等。'
            },]
        }
    },
    mounted() {
        
    },
    methods:{

    }
}
</script>
<style scoped>
    .service {
    width:100%;
    display:flex;
    }
    .item{
    flex:1;
    text-align: center;
    padding: 48px 24px;
    color: #d9d9d9;
    background-position: 50%;
    background-size: cover;
    display:flex;
    flex-direction: column;
    justify-content: center;
    }
    h4{
        font-size:24px;
        font-weight: 600;
    }
    p{
        font-size: 14px;
        line-height: 1.5;
        margin-top:20px;
    }
</style>
