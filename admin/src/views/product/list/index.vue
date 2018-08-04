<template>
        <div class="block">
  <el-table
    :data="tableData&&tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="名称"
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
      width="80"
      >
      <template slot-scope="scope">
        <img :src="scope.row.picSmall"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="stock"
      label="库存"
      width="100">
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
      width="350">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="180"
      class='center'
      >
      <template slot-scope="scope" >
        <el-button  type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row,scope.$index)">{{(scope.row.state == 1)?'上架':'下架'}}</el-button>
        <el-button type="text" size="small" @click='delect(scope.row,scope.$index)'>删除</el-button>
      </template> 
    </el-table-column>
  </el-table>
            <el-pagination
                layout="prev, pager, next"
                :total=length*1
                :page-size=num
                @current-change='changeTable($event)'
                >
            </el-pagination>
        </div>
</template>

<script>
  export default {
    methods: {
      delect(row,index){
        this.$confirm('确认操作？')
          .then(_ => {
            let data = this.tableData;
            data.splice(index,1);
            this.tableData = [...data];
            fetch('/api/remove?id='+row.id).then(res=>{
              res.json().then(data => {
                //删除成功
            })
          })
          });
      },
      handleClick(row,index) {
        this.$confirm('确认操作？')
          .then(_ => {
            let data = this.tableData;
            data[index].state = data[index].state == 1?'0':'1';
            this.tableData = [...data];
            fetch('/api/setState?id='+row.id+'&state='+data[index].state).then(res=>{
              res.json().then(data => {
                //数据库更改成功
            })
          })
          });
      },
      changeTable(e){
        fetch('/api/allData?page='+(e-1)*this.num+'&pageSize='+this.num).then(res=>{
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
        num:3,
      }
    },
    mounted() {
        fetch('/api/allData?page=0&pageSize='+this.num).then(res=>{
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
