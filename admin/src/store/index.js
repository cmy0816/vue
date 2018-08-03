import Vuex from 'vuex';
import vue from 'vue';
vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        isLogin: (window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'))) || false
    },
    mutations:{
        IS_LOGIN:(store,payload)=>{
            store.isLogin = payload;
        }
    }
})
export default store;