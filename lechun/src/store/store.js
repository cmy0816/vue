import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
function filterCar (data,isLogin){
    let car = [];
    for(let i=0;i<data.length;i++){
        if (data[i].suggest != 'false'){
            car.push({
                id:data[i].id,
                limitBuyCount: data[i].limitBuyCount
            })
        }
    };
    if (isLogin) {
        fetch('/api/car?mobile=' + isLogin).then(res => {
            res.json().then(data => {
                if (data.code == 1) {
                    let oldCar = data.data;
                    for ( let i = 0 ; i < oldCar.length; i++ ){
                        for ( let j = 0 ; j < car.length; j++){
                            if(oldCar[i].id === car[j].id){
                                if (oldCar[i].limitBuyCount * 1 > car[j].limitBuyCount * 1){
                                    car[j].limitBuyCount = oldCar[i].limitBuyCount;
                                }
                            }else{
                                car.push(oldCar[i]);
                            }
                        }
                    }
                }
            })
        })
    }
    window.localStorage.setItem('car', JSON.stringify({ main: car }));
    fetch('/api/setCar',{
        method: 'POST',
        headers: {
         	'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'mobile=' + isLogin +'&car=' + JSON.stringify(car),
    }).then(res => {
        res.json().then(data => {
            console.log(data);
        })
    })
}
const store = new Vuex.Store({
    state:{
        data:[],
        isLogin: window.localStorage.getItem('tem') || 0
    },
    getters:{
        CAR (state){
            return state.data.filter((item)=>{
                    return item.suggest !== 'false';
            })
        }
    },
    mutations:{
        GET_DATA (state,payload){
            state.data = [...payload.data];
        },
        SHOW_CAR (state,payload){
            let data = state.data;
            for(let i=0;i<data.length;i++){
                if (data[i].id === payload.small){
                    data[i].suggest = payload.isShow;
                }
            }
            state.data = [...data];
            filterCar(state.data,state.isLogin);
        },
        ADD (state, payload){
            let data = state.data;
            for (let i = 0; i < data.length; i++) {
              if (data[i].id === payload.small) {
                data[i].limitBuyCount = data[i].limitBuyCount * 1 + 1;
              }
            }
            state.data = [...data];
            filterCar(state.data, state.isLogin);
        },
        SUB (state, payload){
            let data = state.data;
            for (let i = 0; i < data.length; i++) {
              if (data[i].id === payload.small) {
                data[i].limitBuyCount = data[i].limitBuyCount * 1 - 1;
                if (data[i].limitBuyCount < 1) {
                    data[i].limitBuyCount = 1;
                    data[i].suggest = 'false';
                }
              }
            }
            state.data = [...data];
            filterCar(state.data, state.isLogin);
        },
        IS_LOGIN (state,payload){
            state.isLogin = payload;
        }
    },
    actions:{
        A_GET_DATA({commit}){
            fetch('/api/getData').then(res=>{
                res.json().then(data=>{
                    let car = window.localStorage.getItem('car');
                    if(data.code === 1){
                        if(car){
                            car = JSON.parse(car);
                            for(let i=0;i<car.main.length;i++){
                                for(let j=0;j<data.data.length;j++){
                                    if(car.main[i].id === data.data[j].id){
                                        data.data[j].limitBuyCount = car.main[i].limitBuyCount;
                                        data.data[j].suggest = true;
                                    }
                                }
                            };
                            commit('GET_DATA',data);
                        }else{
                            commit('GET_DATA',data);
                        }
                    }else{
                        alert('数据请求错误，请稍后重试')
                    }
                    
                })
            })
        }
    }
});
export default store;