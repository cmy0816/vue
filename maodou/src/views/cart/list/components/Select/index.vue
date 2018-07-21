<template>
    <div class="list">
        <ul>
            <li v-for='(items,index) in list' :key='index' @click='changeSelect(items.component)'>
                {{items.name}}
            </li>
        </ul>
        <SelectAll :visibility.sync='isShowSelect'>
            <Sort v-if='component === "Sort"' :allData.sync='allData'/>
            <Brand v-if='component === "Brand"' :allData.sync='allData'/>
            <Level v-if='component === "Level"' :allData.sync='allData'/>
            <Move v-if='component === "Move"' :allData.sync='allData'/>
        </SelectAll>
    </div>
</template>
<script>
    import SelectAll from './components/SelectAll';
    import Sort from './components/Sort';
    import Brand from './components/Brand';
    import Level from './components/Level';
    import Move from './components/Move';
    export default {
        data(){
            return {
                list:[{
                    name:"排序",
                    component:'Sort'
                },{
                    name:'品牌',
                    component:'Brand'
                },{
                    name:'级别',
                    component:'Level'
                },{
                    name:'更多',
                    component:'Move'
                }],
                component:'',
                isShowSelect:false,
                allData:{}
            }
        },
        methods:{
            changeSelect(comp){
                this.component = comp;
                this.isShowSelect=true;
            },
        },
        components:{
            SelectAll,Sort,Brand,Level,Move
        }
    }
</script>
<style scoped>
li{
    list-style:none;
}
.list>ul{
    display:flex;
    align-items: center;
    justify-content: space-around;
    padding:.1rem 0;
}
</style>
