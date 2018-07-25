<template>
    <group>
        <x-input title="联系人" v-model="name" placeholder="请输入姓名"></x-input>
        <x-input title="手机号" v-model="tem" placeholder="请输入电话"></x-input>
        <x-address title="城市"  :list="ChinaAddressV4Data" placeholder="请选择地址" :show.sync="showAddress" v-model="value"></x-address>
        <x-input title="收货地址" v-model="address"></x-input>
        <div class='vux-x-input weui-cell block'>
            <div class='weui-cell__hd'>选择地址标签</div>
            <div class="radio">
                <span v-for='(val,index) in tag' :key='index' :class='{"active":val.isShow}' @click='filterRadio(index)'>{{val.name}}</span>
            </div>
        </div>
        <button>保存</button>
    </group>
</template>

<script>
import { XAddress ,ChinaAddressV4Data,Group, XInput} from 'vux'

export default {
   data(){
       return {
           ChinaAddressV4Data:ChinaAddressV4Data,
           title:'地址',
           showAddress:false,
           value:[],
           name:'',
           tem:'',
           address:'',
           tag:[{
               "name":"住宅",
               "isShow":false
           },{
               "name":"公司",
               "isShow":false
           },{
               "name":"学校",
               "isShow":false
           },{
               "name":"家人",
               "isShow":false
           },{
               "name":"朋友",
               "isShow":false
           },{
               "name":"其他",
               "isShow":false
           },]
       }
    },
  components: {
    XAddress,Group, XInput
  },
  methods:{
      showCity(){
          this.showAddress = !this.showAddress
      },
      filterRadio(index){
          for(let i=0;i<this.tag.length;i++){
              this.tag[i].isShow = false;
          };
          this.tag[index].isShow = true;
      }
  }
}
</script>
<style scoped>
.block{
    display:block;
}
.radio{
    width:100%;
    display:flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top:10px;
}
.radio>span{
    width:24%;
    text-align: center;
    line-height: 2;
    border-radius: 30px;
    border:1px solid #ccc;
    margin: 5px 4%;
    color:#ccc;
}
.radio>.active{
    border-color:#000;
    color:#000;
}
button{
    margin: 10px 5%;
    width:90%;
    line-height: 2;
    color:#fff;
    border:0;
    outline: none;
    background-color:rgb(229, 0, 17);
    font-size: 16px;
}
</style>

