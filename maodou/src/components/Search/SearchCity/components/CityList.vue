<template>
    <transition
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
    >
        <div  class='city' v-show="visibility">
            <div class='title'><span @click='kill'>×</span><h4>选择城市</h4></div>
            <div class="main" ref='main'>
                    <h6>当前选择城市</h6>
                    <li>{{now}}</li>
                    <ul v-for='(cityAll,index) in data' :key='index' :ref='cityAll.letter'>
                        <h6>{{cityAll.letter}}</h6>
                        <li v-for='(city,indey) in cityAll.citys' :key='indey' @click='selected(city.name)'>{{city.name}}</li>
                    </ul>
                    <ol>
                        <li v-for='(cityAll,index) in data' :key='index' @click='toNowCity(cityAll.letter)'>{{cityAll.letter}}</li>
                    </ol>    
            </div>
        </div>
  </transition>
</template>
<script>
export default {
    data(){
        return {
            now:'全国',
            data:[]
        }
    },
    props: {
      visibility: {
          type: Boolean,
          default: false
      },
      value: {
          type: String,
          default: ''
      }
  },
  mounted() {
      this.getData();
  },
  methods: {
      selected (value) {
          this.$emit('input', value);
          this.now = value;
      },
      getData(){
          fetch('https://www.easy-mock.com/mock/5b0be9c51725f034fca4cc0f/example/city').then(res=>{
              res.json().then(
                  data=>{
                      this.data = [...data.data.list];
                  }
              )
          })
      },
      kill(){
          this.$emit('update:visibility', false)
      },
      toNowCity(letter){
          this.$refs['main'].scrollTop = this.$refs[letter][0].offsetTop-55;
      }
  }
}
</script>
<style scoped>
li{
    list-style: none;
}
.city{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:100%;
    height:100%;
    z-index: 10;
    display:flex;
    flex-direction: column;
}
.title{
    height:.5rem;
    padding:.05rem;
    line-height: .5rem;
    background:#fff;
    border-bottom:1px solid #ccc
}
h4{
    font-weight: 400;
    text-align: center;
    display:inline-block;
    margin-left:35%;
    font-size:.2rem;
}
.title span{
    text-align: left;
    font-size:.2rem;
}
h6,li{
    font-size:.2rem;
    line-height: 2;
    border-bottom:1px solid #eee;
    padding:.1rem;
}
h6{
    background:#eee;
}
.main{
    flex:1;
    overflow-y: scroll;
    background:#fff;
    transition: all 1s;
}
ol{
    position: fixed;
    top:1.5rem;
    right:0;
    height:80%;
    z-index: 100;
}
ol>li{
    font-sizE:.14rem;
    line-height: 1.5;
    padding:0;
    margin:0;
}
ul{
    transition: all 1s;
}
</style>


