<template>
        <div class="block">
  <el-table
    :data="tableData&&tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="姓名"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="id"
      label='id'
      width="50"
      >
    </el-table-column>
    <el-table-column
      label="图片"
      width="120"
      >
      <template slot-scope="scope">
        <img :src="scope.row.picSmall"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="details"
      label="描述"
      width="350">
    </el-table-column>
    <el-table-column
      prop="proSummary"
      label="功能"
      width="120">
    </el-table-column>
    <el-table-column
      prop="productUnit"
      label="单位"
      width="30">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="50">
    </el-table-column>
    <el-table-column
      prop="betching"
      label="成分"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
            <el-pagination
                layout="prev, pager, next"
                :total=length*1
                :page-size=num
                @click.native='changeTable($event)'
                >
            </el-pagination>
        </div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      changeTable(e){
        fetch('/api/allData?page='+(e.target.innerText-1)*3+'&pageSize='+3).then(res=>{
            res.json().then(data => {
                this.tableData=data.data.data;
                this.length = data.data.length;
            })
        })
      }
    },

    data() {
      return {
        tableData:[],
        length:0,
        num:3
      }
    },
    mounted() {
        fetch('/api/allData?page=0&pageSize=3').then(res=>{
            res.json().then(data => {
                this.tableData=data.data.data;
                this.length = data.data.length;
            })
        })
    },
  }
</script>

<style>
.block{
  margin-top:20px;
}
</style>
