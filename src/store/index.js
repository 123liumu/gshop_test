import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    decrement(context,value){
        context.commit("INCREMENT",-value)
    },

    incrementOdd(context,value){
        if (context.state.num % 2 == 1){
            context.commit("INCREMENT",value)
        }
    },
    incrementWait(context,value){
        setTimeout(()=>{
            context.commit("INCREMENT",value)

        },500)
    },
}

const mutations = {
    INCREMENT(state,value){
        state.num += value
    },

    PERADD(state,value){
        state.persons.unshift(value)
    }

}

const state = {
    latitude: 40.10038, // 纬度
    longitude: 116.36867, // 经度
    address: {}, // 地址信息对象
    categorys: [], // 分类数组
    shops: [], //商家数组
    userInfo: {}, // 用户信息
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
    cartFoods: [], // 购物车
    searchShops: []
}

const getters = {
     tenNum(state){
        return state.num * 10
     }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})