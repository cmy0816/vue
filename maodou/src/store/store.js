import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        list:[],
        allSelect:{}
    },
    getters:{},
    mutations:{
        ADD (state,value){
            if(window.localStorage.list){
                state.list = JSON.parse(window.localStorage.list);
            }
            value&&state.list.push({
                id:+new Date(),
                data:value
            });
            window.localStorage.list = JSON.stringify(state.list);
        },
        REMOVE(state,id){
            state.list = state.list.filter((item)=>{
                return id !== item.id
            });
            window.localStorage.list = JSON.stringify(state.list);
            if(!state.list.length){
                window.localStorage.clear();
            }
        },
        SELECTADD (state,obj){
            state.allSelect[obj.ty] = obj.value;
            state.allSelect = {...state.allSelect};
        }
    },
    actions:{
        ADD({commit},value){
            commit('ADD',value)
        },
        REMOVE({commit},id){
            commit('REMOVE',id)
        }
    }
});
export default store;