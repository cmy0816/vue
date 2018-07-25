<template>
    <div class="wrap">
     <x-address style="display:none;" title="title"  :list="ChinaAddressV4Data" placeholder="请选择地址" :show.sync="showAddress"></x-address>
    </div>
</template>

<script>
import { XAddress ,ChinaAddressV4Data } from 'vux'

export default {
   data(){
       return {
           ChinaAddressV4Data:ChinaAddressV4Data,
           title:'地址',
           showAddress:true
       }
    },
  components: {
    XAddress
  }
}
</script>

<style>

</style>
