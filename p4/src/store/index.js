import Vue from 'vue'
import Vuex from 'vuex'

export const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cities: [],
        zips: [],
        haveCityInfo: false
    },
    mutations: {
        setCities(state, payload) {
            state.cities = payload;
        },
        setZips(state, payload) {
            state.zips = payload;
        },
        setHaveCityInfo(state, payload) {
            state.haveCityInfo = payload;
        }
    },
    actions: {
        setCitiesAndZips(context) {
            axios.get("https://e28-p4-mtyson.firebaseio.com/cities.json").then(response => {
                context.commit('setCities', response.data);
                context.dispatch('setZips');
            });
        },
        setZips(context) {
            axios.get("https://e28-p4-mtyson.firebaseio.com/zips.json").then(response => {
                context.commit('setZips', response.data);
                context.commit('setHaveCityInfo', true);
            });
        }

    }
})