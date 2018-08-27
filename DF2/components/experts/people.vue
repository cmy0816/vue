<template>
<div class="people">
    <dl v-if='data.length' class="one" v-for='(item,index) in data' :key='index'>
      <dt>
        <img v-lazy='item.image' :key='item.name'>
      </dt>
      <dd>
        <h4>{{item.name}}</h4>
        <p class="job">{{item.job}}</p>
        <p class='introd'>{{item.introduction}}</p>
      </dd>
    </dl>
    <p v-show='!data.length'>暂无数据</p>
      <el-pagination
        layout="prev, pager, next"
        :page-count='total'
        @current-change='changeData'
        >
      </el-pagination>
</div>
</template>

<script>
import Fetch from '~/until/fetch.js';
export default {
  data(){
    return {
        page:this.$route.query.page?this.$route.query.page:1,
        index:this.$route.params.id?this.$route.params.id:0,
        pageSize:10,
        data:[],
        total:10
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){
      Fetch.get('/api/experts',{
        type:this.index,
        page:this.page,
        pageSize:this.pageSize
      }).then(res=>{
        this.total = Math.ceil(res[0].total/10);
        this.data=[...res[1]];
      })
    },
    changeData(page){
      this.page=page;
      this.$router.push({
        path: `/experts/${this.$route.params.id||0}`,
        query:{
          page:page
        }
      })
      this.getData();
    }
  },
  components: {
  }
}
</script>
<style scoped>
.people{
  padding-top:20px;
}
.one{
  display:flex;
  align-items: flex-start;
  padding: 20px 0 20px 0;
  border-bottom:1px solid #ccc;
}
dt{
  margin-right:20px;
}
h4{
  color: #59b2c3;
  font-size: larger;
  font-weight: 600;
  margin-bottom: 6px;
}
.job{
  font-size: 14px;
  margin-bottom: 6px;
}
.introd{
  font-size: 13px;
  color: #888;
  text-align: left;
  margin-top: 1em;
}
.one:last-child{
  border-bottom:transparent;
}
img{
  width: 210px;
  height: 140px;
  margin: 0 auto 6px;
}
.el-pagination{
  float:right;
}
</style>
